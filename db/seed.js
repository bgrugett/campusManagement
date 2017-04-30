'use strict';

const db = require('./index.js');
 const models = require('./models');
 const User = models.User;
 const Campus = models.Campus;
// {mapValues} = require('lodash');

function seedEverything() {
  const seeded = {
    users: users(),
    campuses: campuses()
  };

  return Promise.props(seeded);
}

const users = seed(User, {
  graceHopper: {
    email: 'grace@yale.edu',
    name: 'Grace Hopper'
  },
  rocky: {
    name: 'Rocky',
    email: 'squirrel@wassU.edu'
  },
  bullwinkle: {
    name: 'Bullwindle',
    email: 'moose@wassU.edu'
  },
  alanTuring: {
    name: 'Alan Turing',
    email: 'enigma@cambridge.edu'
  }
});
const campuses = seed(Campus, {
  yale: {
    name: 'Yale University',
    location: 'New Haven CT'
  },
  wassamotta: {
    name: 'Wassamotta University',
    lociton: 'Frostbite Falls MN'
  },
  cambridge: {
    name: 'Cambridge University',
    location: 'Cambridge England'
  }
});


//if (module === require.main) {
    db.sync({force: true})
    .then(seedEverything)
    .finally(() => process.exit(0));
//}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error);
    this.cause = error;
    this.row = row;
    this.key = key;
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`;
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows);
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key];
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error); })
                )
            };
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`);
        return seeded;
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`);
      });
  };
}

module.exports = Object.assign(seed, {users, campuses});
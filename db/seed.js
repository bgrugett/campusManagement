'use strict';

const db = require('../db');
const User = db.models.user;
const Campus = db.models.campus;

//db.sync({force: true});

const campuses = {
  yale: {
    name: 'Yale University',
    location: 'New Haven CT',
    imageURL: '/images/Yale.jpg'
  },
  wassamotta: {
    name: 'Wassamotta University',
    location: 'Frostbite Falls MN',
    imageURL: '/images/WossamottaU.jpg'
  },
  cambridge: {
    name: 'Cambridge University',
    location: 'Cambridge England',
    imageURL: '/images/Cambridge.jpg'
  },
  michigan: {
    name: 'University of Michigan',
    location: 'Ann Arbor MI',
    imageURL: '/images/Michigan.jpg'
  },
  cornell: {
    name: 'Cornell University',
    location: 'Ithica NY',
    imageURL: '/images/Cornell.jpg'
  }
};

const users = {
  graceHopper: {
    email: 'grace@yale.edu',
    name: 'Grace Hopper',
    campusId: 1
  },
  rocky: {
    name: 'Rocky',
    email: 'squirrel@wassU.edu',
    campusId: 2
  },
  bullwinkle: {
    name: 'Bullwinkle',
    email: 'moose@wassU.edu',
    campusId: 2
  },
  alanTuring: {
    name: 'Alan Turing',
    email: 'enigma@cambridge.edu',
    campusId: 3
  },
  ford: {
    name: 'Gerald Ford',
    email: 'gerry@potus.gov',
    campusId: 4
  },
  hamilton: {
    name: 'Margaret Hamilton',
    email: 'mh@umich.edu',
    campusId: 4
  },
  mandi: {
    name: 'Mandi M',
    email: 'mm@cornell.edu',
    campusId: 5
  }
};

Promise.all(
      Object.keys(campuses).map(key =>
      Campus.create(campuses[key])
      )
)
.then(Object.keys(users).map(key =>
   User.create(users[key])
))
.catch(err => console.error(err));



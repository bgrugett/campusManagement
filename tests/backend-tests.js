const db = require('../db');
const User = db.models.user;
const Campus = db.models.campus;
const app = require('../server/start');

const chai = require('chai');
const chaiProperties = require('chai-properties');
const chaiThings = require('chai-things');
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const supertest = require('supertest-as-promised');
//import sinon from 'sinon';

describe('▒▒▒ Backend tests ▒▒▒', () => {

    //beforeEach('Synchronize and clear database', () => db.sync({force: true}));

    //after('Synchronize and clear database', () => db.sync({force: true}));

    describe('Sequelize models', function () {
        describe('Campus Model', () => {
          it('has name in the schema definition', () => {
                expect(Campus.attributes.name).to.be.an('object');
            });
          it('has location in the schema definition', () => {
                expect(Campus.attributes.location).to.be.an('object');
            });
          it('has imageURL in the schema definition', () => {
                expect(Campus.attributes.imageURL).to.be.an('object');
            });
        });
        describe('User Model', () => {
            // *Assertion translation*:
            // This assertion expects that the User model will
            // put an `email` column in the users table.
            it('has the expected schema definition', () => {
                expect(User.attributes.email).to.be.an('object');
            });

            describe('validations', () => {

                // *Assertion translation*:
                // The `email` column should be a required field.
                it('require email', () => {
                    const user = User.build();
                    return user.validate()
                        .then(err => {
                            expect(err).to.be.an('object');
                            expect(err.errors).to.contain.a.thing.with.properties({
                                path: 'email',
                                type: 'notNull Violation'
                            });
                        });
                });

            });

        });


    });

    describe('HTTP Server', () => {

        let agent;
        beforeEach('Set up agent for testing', () => {
            agent = supertest(app);
        });

        describe('api routes', () => {

            let yale;
            let michigan;
            beforeEach('Seed campuses', () => {
                const campuses = [
                    {name: 'yale'},
                    {name: 'michigan'}
                ];
                return Campus.bulkCreate(campuses, {returning: true})
                    .then(createdCampuses => {
                        yale = createdCampuses[0].id;
                        michigan = createdCampuses[1].id;
                    });
            });


            describe('campuses', () => {

                it('serves up all campuses on request to GET /', () => {
                    return agent
                        .get('/api/campuses')
                        .expect(200)
                        .then(res => {
                            expect(res.body).to.be.an('array');
                            expect(res.body.length).to.be.equal(2);
                            expect(res.body).to.contain.a.thing.with('id', yale);
                            expect(res.body).to.contain.a.thing.with('id', michigan);
                        });
                });
            });

        });

    });

});

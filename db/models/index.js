'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('user') OR Sequelize.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
const Sequelize = require('sequelize');
const User = require('./user');
const Campus = require('./campus');

User.belongsTo(Campus);  //adds campusId key to User
Campus.hasMany(User, {as: 'student'});  //adds getStudents method to Campuses instances

module.exports = {User, Campus};

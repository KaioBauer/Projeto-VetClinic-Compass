const sequelize = require('sequelize')
const db = require('../db/connection')
const Tutor = require('./Tutor')

const Pet = db.define('Pet', {
    
    
    name: {
      type: sequelize.STRING,
      
    },
    species: {
      type: sequelize.STRING,
      
    },
    carry: {
      type: sequelize.STRING,
      
    },
    weight: {
      type: sequelize.INTEGER,
      
    },
    date_of_birth: {
      type: sequelize.STRING,
      
    }
  });
  
  Pet.belongsTo(Tutor);
  Tutor.hasMany(Pet);

  module.exports = Pet
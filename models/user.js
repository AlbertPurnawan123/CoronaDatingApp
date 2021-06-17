'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Username: DataTypes.STRING,
    Email: DataTypes.STRING,
    FullName: DataTypes.STRING,
    Password: DataTypes.STRING,
    Confirm: DataTypes.STRING,
    PhoneNum: DataTypes.STRING,
    Photo: DataTypes.BLOB,
    DataMed: DataTypes.BLOB,
    NoIden: DataTypes.BLOB
  }, {});
    User.associate = function (models) {
    
  };
  return User;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genero = sequelize.define('Genero', {
    nombre: DataTypes.STRING
  }, {});
  Genero.associate = function(models) {
    // associations can be defined here
  };
  return Genero;
};
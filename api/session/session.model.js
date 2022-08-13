const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

class Session extends Model {}
Session.init({
  userId: {
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
    allowNull: false,
  },
}, {
  timestamps: false,
  sequelize,
  modelName: 'Session',
});

module.exports = Session;

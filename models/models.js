const sequelize = require('../db');
const { DataTypes } = require('sequelize');


const Worker = sequelize.define('worker', {
    name: { type: DataTypes.STRING, allowNull: false },
    secondName: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    department: { type: DataTypes.STRING, allowNull: false },
    position: { type: DataTypes.STRING, allowNull: false },
    telephone: { type: DataTypes.STRING, allowNull: false },
});


module.exports = {
    Worker
};
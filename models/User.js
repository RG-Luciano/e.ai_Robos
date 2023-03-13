const { Datatypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {
    id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Datatypes.STRING,
        allowNull: false
    },
    email: {
        type: Datatypes.STRING,
        allowNull: false
    },
    userNome: {
        type: Datatypes.STRING,
        allowNull: false
    },
    senha: {
        type: Datatypes.STRING,
        allowNull: false
    }
})

module.exports = User
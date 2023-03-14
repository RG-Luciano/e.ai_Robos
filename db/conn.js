const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('eaimvc', 'root', 'P3ndr@g0n', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos ao Mysql!')
} catch(error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize
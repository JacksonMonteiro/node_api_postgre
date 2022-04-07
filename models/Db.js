const sequelize = require('sequelize');

// new sequelize('table', 'username', 'password', { host: 'host', dialect: 'mysql' | 'mariadb' | 'postgre' | 'sqlite' })
const connection = new sequelize('users', 'jackson', '123456', {
    host: 'localhost', 
    dialect: 'postgres'
});

module.exports = {
    sequelize: sequelize,
    connection: connection
}
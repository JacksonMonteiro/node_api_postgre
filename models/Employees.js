const db = require('./Db');

const employees = db.connection.define('employees', {
    id: {
        type: db.sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: db.sequelize.STRING
    },
    role: {
        type: db.sequelize.STRING
    }
});

// employees.sync({
//     force: true
// });

module.exports = employees;
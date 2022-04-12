const db = require('./Db');

const admins = db.connection.define('admins', {
    id: {
        type: db.sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    }, 
    username: {
        type: db.sequelize.STRING,
    },
    email: {
        type: db.sequelize.STRING,
    },
    password: {
        type: db.sequelize.STRING,
    }
});

// admins.sync({
//     force: true,    
// });

module.exports = admins;
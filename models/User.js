const db = require('./Db');

const user = db.connection.define('users', {
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

// user.sync({
//     force: true,    
// });

module.exports = user;
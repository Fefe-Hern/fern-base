const Sequelize = require('sequelize');

const sql = new Sequelize('fern', 'root', 'celebi', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

const database = {
    sql: sql,

    authenticate: function () {
        sql.authenticate().then(function () {
            console.log('CONNECTED')
        }).catch(function (err) {
            console.log('FAILED')
        }).done();
    }
};

module.exports = database;
var mysql = require('mysql');

function dbConnection() {
    return con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "m1976p1975",
        database: "toDoGeneration"
    });
}

/**
 * Проверяет есть пользователь с такими данными в базе данных
 * @param {string} login
 * @param {string} password
 * @param {function} callback
 * @param {function} errback
 */
module.exports.checkUserData = async function (login, password, callback, errback) {
    const con = dbConnection();
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM users WHERE login = '" + login + "' and password = '" + password + "'", function (err, result) {
            if (result.length !== 0 && !err) {
                callback();
            } else {
                errback();
            };
        });
    });
}

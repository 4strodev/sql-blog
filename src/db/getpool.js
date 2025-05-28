const mysql = require("mysql2/promise");
// import generateErrorsUtils from '../utils/generateErrorsUtils.js';

const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
    MYSQL_PORT,
} = require("../env");

let pool;

const getPool = () => {
    if (!pool) {
        pool = mysql.createPool({
            connectionLimit: 10,
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DATABASE,
            port: MYSQL_PORT || 3306,
            timezone: "Z",
        });
    }

    return pool;
};

module.exports = { getPool };

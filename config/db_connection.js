const mysql = require("mysql");
const db = require("./db_properties");
module.exports = {
    getConnection: () => {
        return mysql.createConnection({
        host: db.host,
        user: db.user,
        password: db.password,
        databse: db.database
        });
    }
}

const db = require("./dbConfig");

const TABLE_NAME = "cars";

module.exports = {
    get
}

function get () {
    return db(TABLE_NAME);
}
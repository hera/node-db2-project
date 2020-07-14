const db = require("./dbConfig");

const TABLE_NAME = "cars";

module.exports = {
    get,
    getById,
    insert
}

function get () {
    return db(TABLE_NAME);
}

function getById (id) {
    return db(TABLE_NAME).where({id});
}

function insert (carData) {
    return db(TABLE_NAME)
        .insert(carData)
        .then(ids => {
            return getById(ids[0]);
        })
}
const db = require("./dbConfig");

const TABLE_NAME = "cars";

module.exports = {
    get,
    getById,
    insert,
    getByVin
}

function get () {
    return db(TABLE_NAME);
}

function getById (id) {
    return db(TABLE_NAME).where({id});
}

function getByVin (vin) {
    return db(TABLE_NAME).where({vin});
}

function insert (carData) {
    return db(TABLE_NAME)
        .insert(carData, "id")
        .then(ids => {
            return getById(ids[0]);
        })
}
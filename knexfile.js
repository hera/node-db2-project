require("dotenv").config();

module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "test",
            user: "test_user",
            password: process.env.DB_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        }
    }
};

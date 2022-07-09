//const knex = require("knex")

// 1 manera dbConfigString = "mysql://<user>:<password>@<host>:port>/<database>"

//otra manera
const options = {
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: 'root',
        password: '',
        database: 'test'
    }
}

module.exports = { options }



/*
import knex from 'knex'

const dbConfig = {
        host: "127.0.0.1",
        user: 'root',
        password: '',
        database: 'test'
    }

const options = {
    client: 'mysql',
    connection: dbConfig
}

module.exports = { options }
*/


const { Pool } = require("pg")
const dbConfig = require("../../config/db.config");

// console.log(dbConfig)

const poolPromise = new Pool(dbConfig)
    .connect()
    .then(pool => {
        console.log(`\x1b[32m%s\x1b[0m`,`Connected to PostgreSQL ${process.env.DB_SERV}`)

        return pool
    })
    .catch(err => console.log('\x1b[31m%s\x1b[0m','Database Connection Failed! Bad Config: ', err))

module.exports = {
    Pool,
    poolPromise
}
const { defineConfig } = require("cypress");

const mysql = require('mysql2');

const connections = {
  superprof: {
    host: 'localhost',
    user: 'root',
    password: 'superprof',
    database: 'superprof',
  }
}

function queryDB(connectionInfo, query) {
  const connection = mysql.createConnection(connectionInfo)

  connection.connect()

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        return reject(error)
      }

      connection.end()

      return resolve(results)
    })
  })
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.bbc.co.uk',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on('task', {
        queryDatabase({ dbName, query }) {
          const connectionInfo = connections[dbName]
      
          if (!connectionInfo) {
            throw new Error(`Do not have DB connection under name ${dbName}`)
          }
      
          return queryDB(connectionInfo, query)
        },
      })
    },
  },
});

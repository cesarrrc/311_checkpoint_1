const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'den1.mysql4.gear.host',
        user: 'ccdb3',
        password: 'Dj7oof!7ReN-',
        database: 'ccdb3'
      })
      return this.pool
    }
    return this.pool
  }
}

const instance = new Connection();

module.exports = instance;
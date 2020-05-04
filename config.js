const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: 'jx5kwch6',
    port: 5432,
   });

module.exports = pool
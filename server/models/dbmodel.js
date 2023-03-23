const { Pool } = require('pg');
require('dotenv').config();

const config = {
  connectionString: process.env.PG_URI,
};

const db = new Pool(config);

module.exports = db;

/* 

CREATE TABLE userSchema (
     id SERIAL PRIMARY KEY
     username VARCHAR(25) NOT NULL
     user_id VARCHAR(50) NOT NULL
)

CREATE TABLE projectSchema (
    id SERIAL PRIMARY KEY
    username VARCHAR(25)
    project VARCHAR(5000)
    project_name VARCHAR(25)
)




*/

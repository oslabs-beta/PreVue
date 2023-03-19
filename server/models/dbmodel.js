const { Pool } = require('pg');

const config = {
  connectionString:
    'postgres://ztirkhed:UGT4glA7y0MJtC5FjU3i2UDcFDkAK1hE@isilo.db.elephantsql.com/ztirkhed'
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

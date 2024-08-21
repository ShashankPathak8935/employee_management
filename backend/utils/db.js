// const { Client } = require('pg');
// import { Client } from 'pg';
import pkg from 'pg';
const { Client } = pkg;

// Define the configuration for the PostgreSQL connection

const client = new Client({
    host: 'localhost', // Your PostgreSQL server host
    port: 5432, // Your PostgreSQL server port (default is 5432)
    user: 'postgres', // Your PostgreSQL username
    password: 'SHASHAnk8935@00', // Your PostgreSQL password
    database: 'postgres' // The name of your database
  });

// Connect to the PostgreSQL server
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database!');
  })
  .catch(err => {
    console.error('Connection error', err.stack);
  });

// code for test the connection
  const testQuery = 'SELECT NOW()';
  client.query(testQuery)
    .then(res => {
      console.log('Current time from PostgreSQL:', res.rows[0]);
    })
    .catch(err => {
      console.error('Query error', err.stack);
    });

export default client;
  
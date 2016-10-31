const Config = require('config');
const dbConfig = Config.get('db');
const fileAsync = require('lowdb/lib/file-async');
const low = require('lowdb');

const db = low(dbConfig.file, {
  	storage: fileAsync
});

db.defaults({ vehiculos: [] }).value();

module.exports = db;

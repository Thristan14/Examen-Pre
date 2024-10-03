const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  operatorsAliases: false,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

// Importar modelos
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require('../models/usuario.models.js')(sequelize, Sequelize);
db.Libro = require('../models/libro.models.js')(sequelize, Sequelize);
db.Autor = require('../models/autor.models.js')(sequelize, Sequelize);

module.exports = db;

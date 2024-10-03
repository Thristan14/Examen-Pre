module.exports = (sequelize, Sequelize) => {
  const Libro = sequelize.define('libro', {
    id_libro: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    titulo: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    autor: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    isbn: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true
    },
    editorial: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    anio_publicacion: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    categoria: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    cantidad_disponible: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ubicacion: {
      type: Sequelize.STRING(100),
      allowNull: false
    }
  });

  return Libro;
};
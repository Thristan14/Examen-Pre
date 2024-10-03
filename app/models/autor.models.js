module.exports = (sequelize, Sequelize) => {
  const Autor = sequelize.define('autor', {
    id_autor: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    apellido: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    nacionalidad: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    fecha_nacimiento: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

  return Autor;
};

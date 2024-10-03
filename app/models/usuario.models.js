module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define('usuario', {
    id_usuario: {
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
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    telefono: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    direccion: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    fecha_registro: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    estado: {
      type: Sequelize.ENUM('activo', 'inactivo', 'suspendido'),
      allowNull: false,
      defaultValue: 'activo'
    }
  });

  return Usuario;
};
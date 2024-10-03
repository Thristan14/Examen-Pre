const db = require('../config/db.config.js');
const Usuario = db.Usuario;

// Crear un nuevo usuario
exports.create = (req, res) => {
    let usuario = {};

    try {
        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.email = req.body.email;
        usuario.telefono = req.body.telefono;
        usuario.direccion = req.body.direccion;
        usuario.fecha_registro = req.body.fecha_registro;
        usuario.estado = req.body.estado;

        Usuario.create(usuario).then(result => {
            res.status(200).json({
                message: "Uploaded successfully a usuario with id = " + result.id_usuario,
                usuario: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los usuarios
exports.findAll = (req, res) => {
    Usuario.findAll()
        .then(usuarios => {
            res.status(200).json({
                message: "Get all usuarios' Infos Successfully!",
                usuarios: usuarios
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un usuario por Id
exports.findById = (req, res) => {
    Usuario.findByPk(req.params.id)
        .then(usuario => {
            res.status(200).json({
                message: "Successfully retrieved a usuario with id = " + req.params.id,
                usuario: usuario
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar un usuario por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Usuario.update(req.body, { where: { id_usuario: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully a usuario with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a usuario with id = " + id,
                error: error.message
            });
        });
}

// Eliminar un usuario por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Usuario.destroy({ where: { id_usuario: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully a usuario with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a usuario with id = " + id,
                error: error.message
            });
        });
}
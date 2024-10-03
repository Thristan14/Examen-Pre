const db = require('../config/db.config.js');
const Autor = db.Autor;

// Crear un nuevo autor
exports.create = (req, res) => {
    let autor = {};

    try {
        autor.nombre = req.body.nombre;
        autor.apellido = req.body.apellido;
        autor.nacionalidad = req.body.nacionalidad;
        autor.fecha_nacimiento = req.body.fecha_nacimiento;

        Autor.create(autor).then(result => {
            res.status(200).json({
                message: "Uploaded successfully an autor with id = " + result.id_autor,
                autor: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los autores
exports.findAll = (req, res) => {
    Autor.findAll()
        .then(autores => {
            res.status(200).json({
                message: "Get all autores' Infos Successfully!",
                autores: autores
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un autor por Id
exports.findById = (req, res) => {
    Autor.findByPk(req.params.id)
        .then(autor => {
            res.status(200).json({
                message: "Successfully retrieved an autor with id = " + req.params.id,
                autor: autor
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar un autor por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Autor.update(req.body, { where: { id_autor: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully an autor with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update an autor with id = " + id,
                error: error.message
            });
        });
}

// Eliminar un autor por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Autor.destroy({ where: { id_autor: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully an autor with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete an autor with id = " + id,
                error: error.message
            });
        });
}

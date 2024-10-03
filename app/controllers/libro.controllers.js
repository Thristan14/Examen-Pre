const db = require('../config/db.config.js');
const Libro = db.Libro;

// Crear un nuevo libro
exports.create = (req, res) => {
    let libro = {};

    try {
        libro.titulo = req.body.titulo;
        libro.autor = req.body.autor;
        libro.isbn = req.body.isbn;
        libro.editorial = req.body.editorial;
        libro.anio_publicacion = req.body.anio_publicacion;
        libro.categoria = req.body.categoria;
        libro.cantidad_disponible = req.body.cantidad_disponible;
        libro.ubicacion = req.body.ubicacion;

        Libro.create(libro).then(result => {
            res.status(200).json({
                message: "Uploaded successfully a libro with id = " + result.id_libro,
                libro: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los libros
exports.findAll = (req, res) => {
    Libro.findAll()
        .then(libros => {
            res.status(200).json({
                message: "Get all libros' Infos Successfully!",
                libros: libros
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un libro por Id
exports.findById = (req, res) => {
    Libro.findByPk(req.params.id)
        .then(libro => {
            res.status(200).json({
                message: "Successfully retrieved a libro with id = " + req.params.id,
                libro: libro
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar un libro por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Libro.update(req.body, { where: { id_libro: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully a libro with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a libro with id = " + id,
                error: error.message
            });
        });
}

// Eliminar un libro por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Libro.destroy({ where: { id_libro: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully a libro with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a libro with id = " + id,
                error: error.message
            });
        });
}

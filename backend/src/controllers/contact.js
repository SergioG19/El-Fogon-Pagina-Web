//Elaborado por Juan Gonzalez

const contact = require('../models/contact');

class FormularioController {
    enviarFormulario = async (req, res) =>{
        try {
          const { nombre, email, cedula, fecha_nac, telefono, asunto, descripcion } = req.body;
          const nuevoFormulario = new contact({ nombre, email, cedula, fecha_nac, telefono, asunto, descripcion });
          await nuevoFormulario.save();
           res.json({mensaje: 'Mensaje Enviado'});
        } catch (error) {
          console.log(error);
          res.status(404).json({mensaje: 'Error al enviar el formulario'})
        }
    };
}

const contacto = new FormularioController();

module.exports = contacto;
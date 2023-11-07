//Elaborado por Juan Gonzalez

const {Schema, model} = require('mongoose');

const contactoEsquema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cedula: {
    type: Number,
    required: true
  },
  fecha_nac: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  asunto: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
},{
  timestamps: true
});

// Crear el modelo de usuario
const contacts = model('contacts', contactoEsquema);

// Exportar el modelo de usuario
module.exports = contacts;
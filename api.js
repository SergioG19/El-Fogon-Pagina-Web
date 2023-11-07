//Elaborado por Juan Gonzalez

const API = `http://localhost:3000`;
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    let respuesta = '';

    const nombre = e.target.name.value;
    const email = e.target.email.value;
    const cedula = e.target.cedula.value;
    const fechaNac = e.target.birthday.value;
    const telefono = e.target.telefono.value;
    const asunto = e.target.asunto.value;
    const descripcion = e.target.msj.value;
    console.log([nombre, email, cedula, fechaNac, telefono, asunto, descripcion]);


    await fetch(`${API}/contacto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "nombre": nombre,
            "email": email,
            "cedula": cedula,
            "fecha_nac": fechaNac,
            "telefono": telefono,
            "asunto": asunto,
            "descripcion": descripcion
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            respuesta = data.mensaje;
            window.alert(respuesta);
        });

    console.log(respuesta);
})

// 1 . Crear un objeto, agregar como sus propiedades lo siguiente:

// Una propiedad de tipo arreglo llamado mascotas que incluya estos elementos: 
// 'perros','gatos','canarios','pez','serpiente'

var mascotas = ['perros','gatos','canarios','pez','serpiente']

// Una propiedad de tipo function llamada eliminarMascota, que reciba el 1 parámetro como el tipo de la mascota a eliminar
// Esta función debe buscar según el parámetro dentro del arreglo definido anteriormente llamado mascotas 
// y eliminar el tipo de mascota. Esta función debe retornar el arreglo actual

function eliminarMascota(tipoMascota) {     // tipoMascota se debe ingresar 'perros', 'gatos', etc...
    mascotas.splice(mascotas.indexOf(tipoMascota), 1)
    return mascotas; 
} 

// Una propiedad de tipo function llamada eliminarUltimaMascota, que no reciba parámetros y que al ejecutarse:
// Esta función debe eliminar el tipo de mascota al final del arreglo definido anteriormente llamado mascotas
// Esta función debe retornar el arreglo actual

function eliminarUltimaMascota(){
    mascotas.pop();
    return mascotas;
}

// Una propiedad de tipo function llamada agregarMascota, que reciba el 1 parámetro como el tipo de nueva mascota a agregar
// Esta función debe agregar la nueva mascota al final del arreglo definido anteriormente llamado mascotas
// Esta función debe retornar el arreglo actual

function agregarMascota(tipoMascota){
    mascotas.push(tipoMascota);
    return mascotas;
}

// Una propiedad de tipo function llamada contadorMascotas, que no reciba parámetros y que al ejecutarse:
// Esta función debe contar dentro del arreglo cuantos tipos de mascotas en su definición terminan en os, por ejemplo Perros termina en os
// Guardar el resultado en una variable
// La función debe retornar un string o texto, que diga En el arreglo hay 3 mascotas que terminan con 'os'
var contador = 0;
function contadorMascotas(){
    mascotas.forEach(function(mascota, ){
        if (mascota.endsWith('os')){
            contador++;
        }
    })
    return "En el arreglo hay " + contador + " mascotas que terminan con 'os'"
}

// 2. Dado el siguiente objeto:

const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
    
}

// Hacer una función que reciba el objeto trabajador y devuelva un mensaje: 
// El trabajador (Jhon Smith) trabaja en (ACME) con cargo (QA) y le gusta (comer) y (2) más, (no tiene hijos)

function devolverMensajeUno(){
    var gustos = Object.values(trabajador.gustos)
    var hijos = trabajador.hijos;
    if (hijos == null){
        hijos = " no tiene hijos";
    }
    return "El trabajador " + trabajador.nombre + " trabaja en " + trabajador.empresa.datos.nombre + " con cargo " + trabajador.cargo + " y le gusta " + gustos[0] + " y " + gustos[1] + ", " + gustos[2] + ", " + hijos;
}


// Hacer una función que reciba el objeto trabajador y devuelva un mensaje: 
// El trabajador (Jhon Smith) va a su trabajo en (Santiago), es (QA), en el puesto (nº 24), trabaja con (Facebook) y (Google)

function devolverMensajeDos(){
    var clientes = Object.values(trabajador.empresa.clientes)
    return "El trabajador " + trabajador.nombre + " va a su trabajo en " + trabajador.empresa.ubicación.comuna + ", es " + trabajador.cargo + ", en el puesto " + trabajador.empresa.ubicación.puesto + ", trabaja con " + clientes[0] + " y " + clientes[1];
}



// 1. Escribir una función a la que se pasa como parámetro un número entero 
// y devuelve como resultado un texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función.

function parImpar (numero){
    if (numero==0){
        return 'el numero ingresado es cero'
    }if (numero%2==0){
        return 'el numero es par'
    }
    else {
        return 'el numero es impar'
    }
}

// 2. Según este string "abcdefghijklmnñopqrstuvwxyz", hacer una función que recibe un parámetro 
// (un caracter o una letra), y la función me debe devolver en qué posición en la cadena del string se 
// encuentra el caracter entregado como argumento. Para realizar esto deben buscar en el prototipo String

function verPosicion (letra){
    var string = "abcdefghijklmnñopqrstuvwxyz"
    return string.indexOf(letra)
}

//3. Hacer una función que reciba un precio, y este me devuelva el precio con impuesto de 0.19%. 
//Si yo ingreso 1000 a la función, me debería retornar con el formato "El precio con impuesto es de $1190"

function calculaImpuesto(precio){
    return 'El precio con impuesto es de ' + (precio*1.19)
}

//4. Hacer un closure con contexto de "una persona tira un dado". Es decir, yo le entrego un nombre, por ej:
// var dadoJulio = nuevoDado('julio') Y que la respuesta de dadoJulio() sea:
// dadoJulio() -> "Julio tiró un dado y salió 6" dadoJulio() 
// Por lo tanto, la respuesta del closure debe ser aleatoria y el dado debe ser de 6 caras (osea del 1 al 6).

function dado(nombre) {
        function numeroAleatorio(){
            return Math.round(Math.random()*(6-1)+parseInt(1));
        }
        return nombre + ' tiró un dado y salió ' + numeroAleatorio();
}           

//5.Generar un prototipo llamado Persona que va a recibir 2 argumentos (nombre completo y edad). 
// El prototipo debe tener un método que sea guardarEnLocalStorage y guardarEnSessionStorage, 
// estos métodos deben guardar nombre completo y edad en el local storage y session storage. 
// Al guardar estos elementos, deben visualizarse a través del debugger de chrome o de algún otro browser.

function Persona(nombreCompleto,edad){
    this.nombreCompleto=nombreCompleto;
    this.edad=edad;
}

//persona1.guardarEnLocalStorage()
Persona.prototype.guardarEnLocalStorage = function(){
    localStorage.setItem('nombre', this.nombreCompleto)
    localStorage.setItem('edad', this.edad)
}

//persona1.guardarEnSessionStorage()
Persona.prototype.guardarEnSessionStorage = function(){
    sessionStorage.setItem('nombre', this.nombreCompleto)
    sessionStorage.setItem('edad', this.edad)
}

//leerVariableGuardadaLocal('nombre','edad')
function leerVariableGuardadaLocal(nombre,edad){
    var nombre = localStorage.getItem(nombre);
    var edad = localStorage.getItem(edad);
    console.log(nombre)
    console.log(edad)
}

//leerVariableGuardadaSession('nombre','edad')
function leerVariableGuardadaSession(nombre,edad){
    var nombre = sessionStorage.getItem(nombre);
    var edad = sessionStorage.getItem(edad);
    console.log(nombre)
    console.log(edad)
}
//persona1
var persona1 = new Persona('Sergio Eduardo Abazola Palma', 32);


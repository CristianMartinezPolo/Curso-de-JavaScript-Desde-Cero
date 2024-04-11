// Capacidades que tienen las funciones al igual que otros

// 1. Pasar funciones como argumentos -> Callback

/* function a () {}
function b (a) {}
b(a)


// Retornar funciones
function a () {
    function b () {}
    return b
}

// Asignar funciones a variables -> Expresión de función

const a = function (){}

// Tener propiedades y métodos

function a (){}
const obj = {}
a.call(obj)

// Anidar funciones -> Nested functions

function a () {
    function b () {
        function c () {
        
        }
        c()
    }
    b()
}
a()
 */
// ¿Es posible almacenar funciones en objetos?

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launcMessage(){
        console.log('On Fire!!!')
    }
}

rocket.launchMessage()
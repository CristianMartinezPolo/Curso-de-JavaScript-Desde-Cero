// String primitivos

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof(stringPrimitivo))

const stringPrimitivoTambien = 'Soy un string primitivo también'
console.log(typeof(stringPrimitivoTambien))

// String objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof(stringObjeto))

// Acceder a caracteres
const saludo = 'Hola. ¿Cómo estás?'
console.log(saludo[0])
console.log(saludo.charAt(0))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Cómo'))
console.log(saludo.indexOf('como')) //retorna -1 indicando que la palabra no se encuentra en el texto
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5))
console.log(saludo.length)
console.log(saludo.toLocaleLowerCase())
const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', 'a todos')
console.log(nuevoSaludo)
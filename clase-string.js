// Creación de Strings
const primeraOpcion = 'Comillas simples'
const segundaOpcion = 'Comillas dobles'
const terceraOpcion = 'Comillas ladeadas'

// 1. Concatenación: Opción +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi deirección completa es '+ direccion + ' ' + ciudad
console.log(direccionCompleta)

// 2. Concatenación: Template Literals
const nombre = 'Cristian'
const pais = 'Colombia'
const presentacion = `Hola, soy ${nombre} de ${pais}`

console.log(presentacion)

// 3. Concatenación: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = 'Colombia'
const pensamiento = [primeraParte, segundaParte, terceraParte]

console.log(pensamiento.join(' '))

// 4. Concatenación: concat()
const hobbie1 = 'Correr'
const hobbie2 = 'Ver TV'
const hobbie3 = 'Estudiar'
const hobbies = 'Mis hobbies son:'.concat(hobbie1, ', ',hobbie2, ', ', hobbie3, '.')

console.log(hobbies)

// Caracteres de escape
//const whatDoIDo = 'I'm Electrical Engineer'

// 1. Escape alternativo
const escapeAlternativo = "I'm Electrical Engineer"

// 2. Barra invertida
const escapeBarraInvertida = 'I\'m Electrical Engineer'

// 3. Template literals
const escapeComillaInvertida = `I'm Electrical Engineer`

// Escritura de String largos
/*
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Quisque porta
*/
const texto =   'Lorem ipsum dolor sit amet,\n'+
                'consectetur adipiscing elit.\n'+
                'Quisque porta'

console.log(texto)
const texto2 =   'Lorem ipsum dolor sit amet,\n\
consectetur adipiscing elit.\n\
Quisque porta'

console.log(texto2)
const texto3 =   `Lorem ipsum dolor sit amet,\n\
consectetur adipiscing elit.\n\
Quisque porta`

console.log(texto3)
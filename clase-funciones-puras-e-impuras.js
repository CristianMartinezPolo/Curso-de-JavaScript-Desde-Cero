// Funciones puras

/* 
Caracteristicas:
1. Dada una misma entrrada, siempre se obtendrá la misma salida
2. No producen efectos secundarios
 */

// Side Effects (Efectos secundarios): Todo esto produce efectos secundarios
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensaje en la pantalla o en consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// Ejemplo de función pura
function sum (a, b){
    return a + b
}

// Funciones impuras

// Ejemplo de función impura porque se tiene un efecto secundario con el console.log
function sum (a, b){
    console.log('A: ',a)
    return a + b
}

let total = 0
function sumWithSideEffect (a){ // Función impura porque modifica una variable global
    total += a
}

// Función pura
function square (x){
    return x**2
}

// Función pura
function addTen (y){
    return y + 10 
}

// Función pura
const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)
// Null
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)

// Undefined
let name
console.log(name)

// Symbol
const unique = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

// BigInt
const bigNumber = 65217894651846512798465846518456124865184654651845n
console.log(bigNumber)

const numberOfParticlesInTheUnierse = 1264513645134515613232045465146514865132984651784651784651329846512n
console.log(numberOfParticlesInTheUnierse)
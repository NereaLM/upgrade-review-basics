//ITERACIÓN #1: MIX FOR E INCLUDES

//Dado el siguiente javascript usa for of para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const moviesCategories = []

for(let object of movies) {
        for(let category of object.categories) {
            debugger
            if(!moviesCategories.includes(category)) {
                moviesCategories.push(category)

            }
        }
    }
console.log(moviesCategories)




//ITERACIÓN #2: MIX FORS

//Dado el siguiente javascript usa for of y for in para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.


const users = [
    {
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {
        favoritesSounds: {
            waves: {format: 'mp3',volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3',volume: 60},
        }
    },
]

let getMedia = (array) => {
    let cantidad = 0
    let total = 0
    for(let user of array) {
        for(let property in user.favoritesSounds) {
            total += user.favoritesSounds[property].volume
            cantidad++
        }
    }
    let media = total / cantidad
    return media

}
let result = getMedia(users)
console.log("La media es: " + result)




//ITERACIÓN #3: Mix Fors

//Dado el siguiente javascript usa for of y for in para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa for in para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez que accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.


const users2 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let repeatedSounds = [""]
var counts = {};
for (let value of users2) {
    console.log(users2)

    for (let prop in value.favoritesSounds) {
        console.log(prop)
        const words = prop.split(",");
        console.log(words); 
        words.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        console.log(counts)
    }
}




//ITERACIÓN #4: MÉTODOS findArrayIndex

//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == text){
            console.log("encontrado: " + array[i] + " en la posicion: " + i)
        }
    }
}

findArrayIndex(array, "Mosquito")





//ITERACIÓN #5: Función rollDice

//Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();**

function rollDice(caras) {
    return Math.floor((Math.random(caras) * 20) + 1)                                                
 }
 
 rollDice(20)
 console.log(rollDice(20))
 
 


 
 //ITERACIÓN #6: Función swap

//Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.


var arr = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

Array.prototype.swapItems = function(array, a, b){
  this[a] = this.splice(b, 1, this[a])[0];
  return this;
}

console.log(arr.swapItems(1, 3));
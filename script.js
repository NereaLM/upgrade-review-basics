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



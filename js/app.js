console.log('Snack Array & Oggetti')
const minBikeWeight = 1
const maxBikeWeight = 20

// Functions
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Snack 1
const argon = {
    nome: 'argon',
    peso: getRandomIntInclusive(minBikeWeight, maxBikeWeight),
}

const bergamont = {
    nome: 'bergamont',
    peso: getRandomIntInclusive(minBikeWeight, maxBikeWeight),
}

const bianchi = {
    nome: 'bianchi',
    peso: getRandomIntInclusive(minBikeWeight, maxBikeWeight),
}

const bici = [argon, bergamont, bianchi]

console.log(bici)

let lightestIndex
let lightestWeight = bici[0].peso
for (let i = 0; i < bici.length; i++) {
    const currentWeight = bici[i].peso
    if (currentWeight < lightestWeight) {
        lightestIndex = i
    }
}

const lightestBike = bici[lightestIndex]

for (let key in lightestBike) {
    console.log(lightestBike[key])
}

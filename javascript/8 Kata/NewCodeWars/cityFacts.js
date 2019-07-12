let obj = {
    name: 'this place',
    population: 'big number',
    continent: 'somewhere'
}

function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`
}
console.log(cityFacts(obj))


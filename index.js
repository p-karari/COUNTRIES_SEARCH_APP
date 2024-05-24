

function updateCountryCards() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const updateCountryCards = document.querySelectorAll('#countryCards1 .country')
            updateCountryCards.forEach((card, index) => {
                if (index < data.length) {
                    const country = data[index];
                    card.querySelector('img').src = country.flags.png;
                    card.querySelector('.countryName').textContent = country.name;
                    card.querySelector('.population').innerHTML = `<b>Population: </b>${country.population.toLocaleString()}`;
                    card.querySelector('.region').innerHTML = `<b>Region: </b>${country.region}`;
                }

            })
            

        })
}

updateCountryCards()


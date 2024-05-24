

const countryCard = document.getElementById('countryCards1');

function createCountryElement(country) {
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');

    const img = document.createElement('img');
    img.src = country.flags.png;
    img.alt = `Flag of ${country.name}`;
    img.classList.add('img');

    const nameP = document.createElement('p');
    nameP.classList.add('countryName');
    nameP.textContent = country.name;

    const populationP = document.createElement('p');
    populationP.classList.add('population');
    populationP.innerHTML = `<b>Population: </b>${country.population.toLocaleString()}`;

    const regionP = document.createElement('p');
    regionP.classList.add('region');
    regionP.innerHTML = `<b>Region: </b>${country.region}`;

    countryDiv.appendChild(img);
    countryDiv.appendChild(nameP);
    countryDiv.appendChild(populationP);
    countryDiv.appendChild(regionP);

    return countryDiv;
  }

  function displayCountries(countries) {
    countries.forEach(country => {
      const countryElement = createCountryElement(country);
      countryCard.appendChild(countryElement);
    });
  }

  function updateCountryCards() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const updateCountryCards = document.querySelectorAll('#countryCard .country');
            updateCountryCards.forEach((card, index) => {
                if (index < data.length) {
                    const country = data[index];
                    card.querySelector('img').src = country.flags.png;
                    card.querySelector('.countryName').textContent = country.name;
                    card.querySelector('.population').innerHTML = `<b>Population: </b>${country.population.toLocaleString()}`;
                    card.querySelector('.region').innerHTML = `<b>Region: </b>${country.region}`;
                  
                }
              
            });
        })
        .catch(error => console.error('Error fetching the JSON file:', error));
  }

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      displayCountries(data);
      updateCountryCards();

    })
    .catch(error => console.error('Error fetching the JSON file:', error));

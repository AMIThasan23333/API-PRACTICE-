

const loadCoutry = () => {


    fetch('https://restcountries.com/v3.1/all')

    .then( res => res.json())
    .then( data =>country(data))

}

const country = countries => {
    // console.log(countries[0].name.common)

    const countryContainer  = document.getElementById('country');

      for (const country of countries){

        // console.log(country.name.common)
        const countryDiv  = document.createElement('div');

        countryDiv.classList.add('country')

            countryDiv.innerHTML =   `
            
            <h3> Country Name : ${country.name.common} </h3>

            <h3> Country Capital : </h3>

            
            
            
            
            `
            countryContainer.appendChild(countryDiv);

      }


    }



loadCoutry()
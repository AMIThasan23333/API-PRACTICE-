

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

        countryDiv.classList.add('countryi')

            countryDiv.innerHTML =   `
            
            <h3> Country Name : ${country.name.common} </h3>

            <h3> Country Capital : </h3>
            <button  onclick = "loadDetails('${country.cca2}')"> Country Detail</button>

            
            
            
            
            `
            countryContainer.appendChild(countryDiv);

      }


    }

// as it is string u have to quote  on both side of dynamic string

//  <button  onclick = "loadDetails('${countries.cca2}')"> Country Detail</button>


const loadDetails = (code) => {

      const url = `https://restcountries.com/v3.1/alpha/${code}`

     fetch(url)
     .then( res => res.json())
     .then(data => displayCountryDetails(data[0]))

}


  const displayCountryDetails = country => {

    const detailsContainer = document.getElementById('details');


detailsContainer.innerHTML = `

       <h2>    NAME : ${ country.name.common}      </h2>
     
       <img src = ${ country.flags.png} alt="" />

`


  }




loadCoutry()
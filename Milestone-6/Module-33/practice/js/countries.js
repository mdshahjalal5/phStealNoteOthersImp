// ** Load Data

const loadCountries = async ()=>{
    try{
        const response = await fetch("https://restcountries.com/v3.1/all");
        response.ok ? "Successfull" : "unsuccessful";

        const data = await response.json()
        displayData(data)
    }
    catch(error){
        console.log(error);
    }
};


// ** Display data

const displayData = (data)=>{
    // ** Where to add

    const container = document.getElementById('container');

    data.forEach(country => {
        console.log(country)
        const divContainer = document.createElement('div');
        divContainer.classList.add('country');
        const {name:{common:countryName},capital} = country;
        divContainer.innerHTML = `
            <h1>Name : ${countryName}</h1>

           <h3>Capital: ${capital !== undefined ? capital.map(cap => cap) : "No capital"}</h3>

           <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        
        `;

        container.appendChild(divContainer)
    })
};


loadCountries();


const loadCountryDetail = async (code) => {
    // ** dynamic data load using dynamic url
    try{
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        response.ok ? "Successfull" : "unsuccessful";

        const data = await response.json()
        countryDetailsDisplay(data)
    }
    catch(error){
        console.log(error);
    }
};


// ** country data display

const countryDetailsDisplay = (data)=>{
    // ** where to display
    const displayContainer = document.getElementById('details');
    data.forEach(country =>{
        const {name:{common:countryName},flags:{png}}= country;
        console.log(countryName);
        console.log(png)
        const detailsContent = document.createElement('div');
        displayContainer.innerHTML = `
        <h1>${countryName}</h1>
        <img src = ${png}  />
        `;
        // displayContainer.appendChild(detailsContent)
    })
}
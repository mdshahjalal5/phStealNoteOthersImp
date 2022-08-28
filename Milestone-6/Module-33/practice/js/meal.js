// ** Load data

const loadMealData = async (searchKeyWord)=>{
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyWord}`);
        response.ok ? "Successfull" : "unsuccessful";
        const data = await response.json();
        displayMeals(data)
    }catch(error){
        console.log(error)
    }
}




const displayMeals = (data)=>{
    // ** where to add content
    const container = document.getElementById('container');

    container.innerHTML = '';

    // console.log(data)
    const {meals} = data;
    
    meals.forEach(meal => {
        console.log(meal)
        const {strMeal,strInstructions,strMealThumb,idMeal} = meal;
        const divContent = document.createElement('div');
        divContent.classList.add('col');

        divContent.innerHTML = `
        <div onclick="loadMeal(${idMeal})" class="card h-100">
        <img src="${strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text">
                ${strInstructions.slice(0,200)}
            </p>
            </div>
        </div>
        
        `;

        container.appendChild(divContent);
    })

}


const loadMeal = async (id)=>{
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        response.ok ? "Successfull" : "unsuccessful";
        const data = await response.json();
        // console.log(data)
        mealDetailsDisplay(data)
        // displayMeals(data)
    }catch(error){
        console.log(error)
    }
}

// Details of meal display

const mealDetailsDisplay = (data)=>{
    // ** where to display 
    const mealDetailContainer = document.getElementById('detail-meal');
    mealDetailContainer.innerHTML = '';
     const {meals}= data;
     meals.forEach(meal => {
        const {strMeal,strMealThumb,strInstructions} = meal;
        const div = document.createElement('div');

        div.classList.add('card')

        div.innerHTML = `
        <img src="${strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text">${strInstructions.slice(0,200)}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        
        `;

        mealDetailContainer.appendChild(div)

})
}


const search = ()=>{
    const searchinputValue = document.getElementById('search-input').value;
    loadMealData(searchinputValue);

    document.getElementById('search-input').value = '';
};

loadMealData("");
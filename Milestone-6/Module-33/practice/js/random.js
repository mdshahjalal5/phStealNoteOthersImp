// ** Load random user data

const loadRandomUsers = async () =>{
    try{
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        displayUsers(data)
    }
    catch(error){
        console.log(error);
    }
};

loadRandomUsers()

// ** display data

const displayUsers = (data)=>{

    const container = document.getElementById('lover');
    // console.log(data)
   const {results} = data;

   console.log(results);

   results.forEach(user => {
     const {name:{first,last},email,location:{city,country}} = user;
    //  console.log(email);
    //  const {first,last} = name;
    //  const {city,country} = location;
    // console.log(first,last)
    //  console.log(city,country);

    const loverContainer = document.createElement('div');

    loverContainer.classList.add('user');

    loverContainer.innerHTML = `
    <h3>Email:${email} </h3>
    <h2>FullName:${first} ${last} </h2>
    <h1>From:${city} ${country} </h1>

    `;

    container.appendChild(loverContainer);

   });

   

}



const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }


const p=[1,2,3]; const q=p.__?__( n=> Math.pow(n, 3));


onst url = `https://www.themealdb.com/api/json/v1/1/search.php?s={food}` 
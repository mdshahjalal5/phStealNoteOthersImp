// ** Load the data from Api

const userDataFetch = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    return data;
};

// ** now generate the li inside the ul

const generateListitems = async (data)=>{

    const unorderedList = document.getElementById('list-container');

    const users = await userDataFetch();
    
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        unorderedList.appendChild(li);
    })
}

generateListitems()
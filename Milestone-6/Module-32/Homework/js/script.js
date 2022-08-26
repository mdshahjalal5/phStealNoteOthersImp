// ** fetch data

const fetchData = async ()=>{

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        response.ok ? console.log("Successfully Fetched data") : console.log("Unsuccessful Fetch");
        const data = await response.json();
        displayComments(data)

    }
    catch(error){
        console.log(error.message);
    }
   
};


// ** Display data

const displayComments = (comments)=>{
    const container = document.getElementById("container");
    comments.forEach(comment => {
        const content = document.createElement("div");
        content.classList.add("comments")
        content.innerHTML = `
            <h1>${comment.name}</h1>
            <h3>${comment.email}</h3>
            <p>${comment.body}</p>
        
        `;
        container.appendChild(content);
    })
};


fetchData();
// ** data load

const loadData = async ()=>{
    
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        response.ok ? console.log("Response Successful") : console.log("Response Failed");
        const data = await response.json();
        // console.log(data);
        displayPosts(data);

    } catch(error){
        console.log(error);
    }
};


const displayPosts = (data)=>{
    const postContainer = document.getElementById('post-container');

    data.forEach(post => {
        const content = document.createElement('div');
        // console.log(post)
        content.classList.add("post-style")
        content.innerHTML = `
            <h4>${post.title}</h4>
            <h5>Description : ${post.body}</h5>
            <p>${post.userId}</p>
        
        `;

        postContainer.appendChild(content)

    })
};


loadData()


document.getElementById('dataload').addEventListener('click', ()=>{

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => console.log(data))
});
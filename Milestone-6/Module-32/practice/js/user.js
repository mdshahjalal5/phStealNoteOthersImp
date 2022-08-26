// ** load user data


const loaduserData = async ()=>{
   try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    response.ok ? console.log('Succesfull request') : console.log('Unsuccessfull request')
    const data = await response.json();
    return data;
   } catch(error){
    console.log(error)
   }
    
};

document.getElementById('user-data').addEventListener('click',async ()=>{
   const data = await loaduserData();
   console.log(data);
})

// ** create
function create(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
};

// ** update post

function update(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
};

// ** Delete

function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}
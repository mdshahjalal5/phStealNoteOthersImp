
// ** dom recap

document.getElementById('bg-change').addEventListener('click',()=>{
    const allfriends = document.getElementsByClassName('friend');

    for (const friend of allfriends) {
        friend.style.backgroundColor = 'lightblue'
    }
})


document.getElementById('center').addEventListener('click',()=>{
    const third = document.getElementById('third');

    third.style.textAlign = 'center'
})

// ** Adding new element

document.getElementById('add').addEventListener('click',()=>{

    const friends = document.getElementById('friends-container');

    const div = document.createElement('div');

    div.classList.add('friend')

    div.innerHTML = `
        <h3>New friend</h3>
        <p>Added some friends</p>
    
    `

    friends.appendChild(div)
})
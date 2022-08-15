// ********************************

// kake click korbo


document.getElementById('post-button').addEventListener('click', function(){
    const commentBox = document.getElementById('comment-text');
    const comment = commentBox.value;

    const addSection = document.getElementById('container');
    const p = document.createElement('p');
    p.innerText = comment;

    addSection.appendChild(p);

    commentBox.value = '';

})

document.getElementById('input-button').addEventListener('click',function(){

    const inputValue = document.getElementById('input-text').value;

    document.getElementById('myParagraph').innerText = inputValue;

    document.getElementById('input-text').value = " ";
})
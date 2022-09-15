// ** store value to ls

const store = ()=>{
    const id = document.getElementById('id').value
    const value = document.getElementById('value').value
    localStorage.setItem(id,value);
}
// ** add name to ls

const addValueToLs = (id,setKey)=>{
    const value = document.getElementById(id).value;

    localStorage.setItem(setKey,value);
}

document.getElementById('btn-name').addEventListener('click', ()=>{
    addValueToLs('name','name');
});

// ** for age 

document.getElementById('btn-age').addEventListener('click', ()=>{
    addValueToLs('age','age');
});

// ** remove item from localStorage(ls)

const removeItem = (setKey)=>{
    localStorage.removeItem(setKey);
}

// ** name remove

document.getElementById("btn-name-remove").addEventListener('click', ()=>{
    removeItem('name');
});

document.getElementById("btn-age-remove").addEventListener('click', ()=>{
    removeItem('age');
})

// ** clear the localStorage

document.getElementById("btn-clear").addEventListener('click', ()=>{
    localStorage.clear()
})

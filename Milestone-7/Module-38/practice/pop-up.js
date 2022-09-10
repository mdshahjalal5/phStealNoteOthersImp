// ** show the alert

document.getElementById('alert').addEventListener('click',()=>{
    const randomNumber = Math.random()*10; // 0-9 er vitor random number dibe
    console.log(randomNumber)
    randomNumber < 5 && alert('Number is less than five')
    
});

// ** show the confirm -> which takes a decision if the decision is made returns true if decision is not made returns false

document.getElementById('confirm').addEventListener('click',()=>{
    // ** All three boxes used here
    const decision = confirm('Are you going to the picnic ?');

    !!decision ? alert('Deposite the fee for the picnic') : prompt(`Why you don't wat to go write to us`);
});

// ** prompt box

document.getElementById('prompt').addEventListener('click',()=>{

    const feeForPicnic = prompt("Fee is minimum 2000 but you can give more",2000);
    console.log(feeForPicnic)
    feeForPicnic > 2000 ? alert('borolox') : alert('Not borolox');
})



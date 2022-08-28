// ** Load the data 

const loadData = async () => {
    try{
        const response = await fetch('https://api.kanye.rest');
        response.ok ? "Response Successfull" : "Response unsuccessful";
        const data = await response.json();
        displayData(data);
    }
    catch(error){
        console.log(error);
    }
};


// ** Display the data 


const displayData = (data) => {
    // ** where we display
    document.getElementById('quate').innerText = data.quote;
};



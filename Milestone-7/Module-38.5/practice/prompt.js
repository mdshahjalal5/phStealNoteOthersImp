// ** take an input from prompt

const input = prompt('Write any number:');
const inputValue = parseFloat(input);

// ** add the input with 200

const addInputByTwoHundrad = inputValue =>{
    const total = inputValue + 200;
    return total;
};

alert(addInputByTwoHundrad(inputValue))



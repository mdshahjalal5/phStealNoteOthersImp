// ** chair, table and bed banabo -> eder quantity r upor vitti kore koto tuku wood lagbe bole dite hobe

// ** perChair,perTable,perBed a ki poriman wood lagbe ta amra jani or ekta fixed amount er wood lage -> 3 cft, 10 cft, 50 cft -> fixed jinish potro

// ** ekhon ami koita chair koita table koita bed lagbe ta bole dile amar ki poriman wood lagbe amar function ta bole dibe

const chairQuantity = 1;
const tableQuantity = 0;
const bedQuantity = 0;

const woodCalculator = (chairQuantity, tableQuantity, bedQuantity)=>{

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;


    const totalWoodRequired = (perChairWood * chairQuantity) + (perTableWood * tableQuantity) + (perBedWood * bedQuantity);


    return totalWoodRequired;


}

const totalMyWood = woodCalculator(chairQuantity, tableQuantity,bedQuantity);

console.log(totalMyWood);
// ** class -> making instructor object

// ** convention class name strts with Capital letter

// ** Blueprint

class Instructor {
    // ** dynamically ja ja change hobe jokhon notun instructor create hobe

    constructor(name,location){
        this.name = name;
        this.location = location;
    }

    // ** methos of thoose objects

    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    };

    makeQuiz (module){
        console.log(`make quiz for ${module}`)
    }

};

// ** create an instructor object

const instructorOne = new Instructor('Tanmoy','Germany'); // ei object creation er sathe sathe constructor function inside class automatic call hoye jabe


instructorOne.startSupportSession("9.00")

const instructorTwo = new Instructor('Kabul','Bd');

instructorTwo.makeQuiz(60)
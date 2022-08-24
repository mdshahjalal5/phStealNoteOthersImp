// ** class -> making instructor object

// ** convention class name strts with Capital letter

// ** Blueprint

// ** Instructor Team


class CommonFunction{
    constructor(name,location){
        this.name = name;
        this.location = location;
    }

    feeBack(feed){
        console.log(`${this.name} thanks for your ${feed} feedback`)
    }
}


class Instructor extends CommonFunction{
    // ** dynamically ja ja change hobe jokhon notun instructor create hobe

    constructor(name,location){
       super(name,location);
    }

    // ** methos of thoose objects

    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    };

    makeQuiz (module){
        console.log(`make quiz for ${module}`)
    }

    
};


// ** Developer Team

class Developer extends CommonFunction {
    // ** dynamically ja ja change hobe jokhon notun instructor create hobe

    constructor(name,location,region){
        super(name,location);
        this.region = region;
    }

    // ** methos of thoose objects

    developeNewFeatures(feature){
        console.log(`Develope the new feature ${feature}`)
    };

    releaseDate (date){
        console.log(`make quiz for ${date}`)
    }

};

// ** Job placement Team

class JobPlacement extends CommonFunction {
    // ** dynamically ja ja change hobe jokhon notun instructor create hobe

    constructor(name,location,region){
        super(name,location);
        this.region = region;
    }

    // ** methos of thoose objects

    regionofjob(region){
        console.log(`job region ${region}`)
    };

   
};



const aliaDeveloper = new Developer('Alia','Germany','React');

aliaDeveloper.feeBack("Hectick")
aliaDeveloper.developeNewFeatures('Button-New');

const julia = new JobPlacement('Julia','Berlin','Germany');

julia.regionofjob('Portugal');
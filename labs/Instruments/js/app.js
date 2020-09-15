//base class
class Instruments{
    constructor(loudness, family, verb) {
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
        
    }
    //metthod for playing
    playing(){
        console.log(this.family + this.verb + " at " + this.loudness);
    }
}
//concrete classes
class Woodwind extends Instruments {
    constructor(loudness,family,verb){
        super(loudness, "Flute ", "plays");
    }
}
class Percussion extends Instruments {
    constructor(loudness,family,verb){
        super(loudness, "Drum ", "beats");
    }
}
class Stringed extends Instruments {
    constructor(loudness,family,verb){
        super(loudness, "Guitar ", "rips");
    }
}

//create child
let Instrument = [];
Instrument[0] = new Woodwind(20);
Instrument[1] = new Percussion(30);
Instrument[2] = new Stringed(100);
//for each instrument loop
Instrument.forEach(Instruments => {
    Instruments.playing();
});

class VendingMachine {
    constructor() {
        this.firstCandyStock = 2;
        this.firstCandyPrice ="1.50"
        this.firstCandyName = "Twizzler"
        this.secondCandyStock = 5;
        this.secondCandyPrice = "$2.00";
        this.secondCandyName = "M&ms";
        this.firstChipsStock = 4;
        this.firstChipsName = "Lays bag of air";
        this.firstChipsPrice = "$4.50";

    }
    render(){
        return `
        <div class="itemOne" >${this.firstCandyName} $${this.firstCandyPrice} <br>Stock left: ${this.firstCandyStock}
        </div>
        <div class="itemTwo" >${this.secondCandyName} ${this.secondCandyPrice} <br>Stock left: ${this.secondCandyStock}
        </div>
        <div class="itemThree" >${this.firstChipsName} ${this.firstChipsPrice} <br>Stock left: ${this.firstChipsStock}</div>
        `
    }
    dispenseFirst(){
        if (this.firstCandyStock > 0) {
            this.firstCandyStock--;
        }else{
            alert("Out of Stock");
        }
    }
    dispenseSecond(){
        if (this.secondCandyStock > 0) {
            this.secondCandyStock--;
        }else{
            alert("Out of Stock");
        }
    }
    dispenseChip(){
        if (this.firstChipsStock > 0) {
            this.firstChipsStock--;
        }else{
            alert("Out of Stock");
        }
        // console.log(this.firstChipsStock)
    }
    
}



let machine = new VendingMachine();
let machineDiv = document.getElementById("machineDiv");

// machineDiv.innerHTML = machine.render();

//dispence items functions
function dispenceCandyOne(){
    machine.dispenseFirst();
    machineDiv.innerHTML = machine.render();
}
function dispenceCandyTwo(){
    machine.dispenseSecond();
    machineDiv.innerHTML = machine.render();
}
function dispenceChipOne(){
    machine.dispenseChip();
    machineDiv.innerHTML = machine.render();
    
}

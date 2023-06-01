class car{
    constructor(brand,model){
        this.brand = brand;
        this.model= model;

    }

    getInfo(){
        return `the car is ${this.brand} ${this.model}`;
    }
}
let myCar = new car("toyota","vios");
console.log(myCar.getInfo());
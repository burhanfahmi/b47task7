class car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;

    }

    getInfo() {
        return `the car is ${this.brand} ${this.model}`;
    }
}
class ElectricCar extends car{
    constructor(brand,model,baterycapacity){
        super(brand,model);
        this.baterycapacity = baterycapacity;
    }
    getInfo(){
        return `${super.brand.getInfo()} and baterycapacity of ${this.baterycapacity}`;
    }
}
let myCar = new ElectricCar("toyota", "vios",100);
console.log(myCar.getInfo());
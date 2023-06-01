class car{
    constructor(brand,model){
        this.brand = brand;
        this.model= model;

    }

    getInfo(){
        return `the car is ${this.brand} ${this.model}`;
    }
}

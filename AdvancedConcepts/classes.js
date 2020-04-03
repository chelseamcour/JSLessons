class Car {
    #vin; //# makes private
    constructor(make, model, year, miles, color, vin) { //constructor is a function, will be hoisted
        this.make = make;
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.color - color;
        this.#vin = vin;
    }

    get vin() {
        return this.#vin;
    }

    set vin(value){
        this.#vin = value;
    }
}

let myCar = new Car("Toyota", "Camry", 2011, 105620, "Blue", 98751578);

console.log(myCar)
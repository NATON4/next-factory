import React from "react";

class Car {
    public brand: string = "";
    public model: string = "";

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    public say() {
        return this.brand + ": " + this.model;
    }
}

class Toyota extends Car {
    constructor() {
        super("Toyota", "Supra");
    }
}

class Mercedes extends Car {
    constructor() {
        super("Mercedes", "CLE");
    }
}

class Nissan extends Car {
    constructor() {
        super("Nissan", "GTR");
    }
}

class Mazda extends Car {
    constructor() {
        super("Mazda", "RX7");
    }
}

const Home: React.FC = () => {
    const Cars: Car[] = [];

    Cars.push(new Toyota());
    Cars.push(new Mercedes());
    Cars.push(new Nissan());
    Cars.push(new Mazda());

    return (
        <div>
            <h1>Cars</h1>
            <ul>
                {Cars.map((car, index) => (
                    <li key={index}>{car.say()}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

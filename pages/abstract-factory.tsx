import React from "react";

class Car {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public say() {
        return "New car " + this.name;
    }
}

class CarFactory {
    public create(name: string) {
        return new Car(name);
    }
}

const Home: React.FC = () => {
    const cars: Car[] = [];
    const carsFactory = new CarFactory();

    cars.push(carsFactory.create("Toyota"));
    cars.push(carsFactory.create("Mercedes"));
    cars.push(carsFactory.create("Nissan"));
    cars.push(carsFactory.create("Mazda"));

    return (
        <div>
            <h1>Cars</h1>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>{car.say()}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

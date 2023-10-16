abstract class CarFactory {
    public abstract createCar(): Car;

    public someOperation(): string {
        const car = this.createCar();

        return `CarFactory: The same factory's code has just worked with ${car.operation()}`;
    }
}

class ToyotaFactory1 extends CarFactory {

    public createCar(): Car {
        return new ToyotaCar11();
    }
}

class MercedesFactory1 extends CarFactory {
    public createCar(): Car {
        return new MercedesCar11();
    }
}

interface Car {
    operation(): string;
}

class ToyotaCar11 implements Car {
    public operation(): string {
        return 'Toyota Car';
    }
}

class MercedesCar11 implements Car {
    public operation(): string {
        return 'Mercedes Car';
    }
}

function clientCode(factory: CarFactory) {
    console.log('Client: I\'m not aware of the factory\'s class, but it still works.');
    console.log(factory.someOperation());
}

console.log('App: Launched with the ToyotaFactory.');
clientCode(new ToyotaFactory1());
console.log('');

console.log('App: Launched with the MercedesFactory.');
clientCode(new MercedesFactory1());

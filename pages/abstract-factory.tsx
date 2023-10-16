interface CarFactory {
    createToyotaCar(): Car;
    createMercedesCar(): Car;
    createBMWCar(): Car;
}

class ToyotaFactory implements CarFactory {
    public createToyotaCar(): Car {
        return new ToyotaCar();
    }

    public createMercedesCar(): Car {
        return new MercedesCar();
    }

    public createBMWCar(): Car {
        return new BMWCar();
    }
}

class MercedesFactory implements CarFactory {
    public createToyotaCar(): Car {
        return new ToyotaCar();
    }

    public createMercedesCar(): Car {
        return new MercedesCar();
    }

    public createBMWCar(): Car {
        return new BMWCar();
    }
}

class BMWFactory implements CarFactory {
    public createToyotaCar(): Car {
        return new ToyotaCar();
    }

    public createMercedesCar(): Car {
        return new MercedesCar();
    }

    public createBMWCar(): Car {
        return new BMWCar();
    }
}

interface Car {
    drive(): string;
}

class ToyotaCar implements Car {
    public drive(): string {
        return 'Driving a Toyota car.';
    }
}

class MercedesCar implements Car {
    public drive(): string {
        return 'Driving a Mercedes car.';
    }
}

class BMWCar implements Car {
    public drive(): string {
        return 'Driving a BMW car!';
    }
}

function clientCode(factory: CarFactory) {
    const toyotaCar = factory.createToyotaCar();
    const mercedesCar = factory.createMercedesCar();
    const bmwCar = factory.createBMWCar();

    console.log(toyotaCar.drive());
    console.log(mercedesCar.drive());
    console.log(bmwCar.drive());
}

clientCode(new ToyotaFactory());
clientCode(new MercedesFactory());
clientCode(new BMWFactory());
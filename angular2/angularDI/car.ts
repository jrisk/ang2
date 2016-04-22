export class Car {

	/* ALL OF THIS 
	public engine: Engine;
	public tires: Tires;
	public description: 'No DI';

	constructor() {
		this.engine = new Engine();
		this.tires = new Tires();
	}
		WITH DEPENDENCY INJECTION.. */

	//BECOMES THIS=============

	constructor(public engine: Engine, public tires: Tires) { }

	// Car class no longer creates Engine or Tires, it just consumes them

	//method using engine and tires

	drive() {
		return `$(this.description) car with ` +
			`$(this.engine.cylinders) cylinders and $(this.tires.make) tires`;
	}

}

//now lets create a car

var car = new Car(new Engine(), new Tires())

//need a new engine parameter? no problem now that Car is decoupled from Engine

class Engine2 {
	constructor(public Cylinders: number)
}

var bigCylinders = 12;

var car2 = new Car(new Engine2(bigCylinders), new Tires());

//We can do Tests on the Car class because we are in full control of its dependencies
//so the results of the tests will be accurate and reproducable

//we can run mocks and pass them into the Car class

class MockEngine extends Engine { cylinders = 8 };
class MockTires extends Tires { make = "Yokostone" };

var testCar = new Car(new MockEngine(), new MockTires());

//testing the HeroService from the Heroes Tutorial

let expectedHeroes = [{ name: 'A' }, { name: 'B' }];
let mockService = <HeroService>{ getHeroes: () => expectedHeroes };

it('should have heroes when HeroListComponent is created', () => {
	let hlc = new HeroListComponent(mockService);
	expect(hlc.heroes.length).toEqual(expectedHeroes.length);
});

/*

Providers: [Logger]

is shorthand for a new instance of the Provider class 

[new Provider(Logger, {useClass: Logger})]

provide function:

[provide(Logger, { useClass: Logger})]

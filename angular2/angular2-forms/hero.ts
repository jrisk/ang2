export class Hero {

	constructor(
		public id: number,
		public name: string,
		public power: string,
		public AlterEgo?: string
		) { }
}

let myHero = new Hero(1234, 'SuperDude', 'super strength', 'Kevin');

console.log(myHero.name + myHero.power + myHero.power + myHero.AlterEgo);
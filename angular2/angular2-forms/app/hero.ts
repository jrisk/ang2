export class Hero {
	constructor(
		public id: number,
		public name: string,
		public power: string,
		public alterego?: string
		) { }
}

let myHero = new Hero(5544, "aylmaoman", "super vision", "nerdo");

console.log(myHero);
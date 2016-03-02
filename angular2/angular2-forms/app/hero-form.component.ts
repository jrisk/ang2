import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'
import {Hero} from './hero'

@Component({
	selector: 'hero-form',
	templateUrl: './app/hero_form.component.html'
})

export class HeroFormComponent {
	powers = ["Fire", "Water", "Earth", "Can become invisible when no one is around"];

	model: Hero[] = [
	{ id: 1234, name: "whatever", power: "something", AlterEgo: "forgot" }
	];

	submitted = false;

	onSubmit() {
		this.submitted = true;
	}

	get diagnostic() {
		return JSON.stringify(this.model);
	}
}
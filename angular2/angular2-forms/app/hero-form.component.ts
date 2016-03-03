import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'
import {Hero} from './hero'

@Component({
	selector: 'hero-form',
	templateUrl: './app/hero_form.component.html'
})

export class HeroFormComponent {
	powers = ["Fire", "Water", "Earth", "invisibility", "Can become invisible when no one is around"];

	model = new Hero(9876, "The Invisible Man", "invisibility", "kenny chesney");

	submitted = false;

	onSubmit() {
		this.submitted = true;
	}

	newHero() {
		this.model = new Hero(1337, '', '');
	}

	get diagnostic() {
		return JSON.stringify(this.model);
	}
}
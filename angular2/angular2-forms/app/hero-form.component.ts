import {Component,Input} from 'angular2/core'
import {NgForm} from 'angular2/common'
import {Hero} from './hero'

@Component({
	selector: 'hero-form',
	templateUrl: './app/hero-form.component.html'
})

export class HeroFormComponent {
	//powers doesnt appear on new hero button, must be reset manually diffrent in newHero()
	powers = ["Fire", "Water", "Earth", "invisibility", "Can become invisible when no one is around"];

	model = new Hero(9876, "The Invisible Man", "invisibility", "kenny chesney");

	submitted = false;

	active = true; // workaround flag

	test = "wtf mang herofrom";
	
	onSubmit() {
		this.submitted = true;
	}

	newHero() {
		this.model = new Hero(1337, "", "");
		//workaround for proper form reset feature, this is a hack
		this.active = false;
		setTimeout(()=> this.active = true, 0)
	}

	//this wasnt in the tutorial
	onChange(newVal) {
		console.log(newVal);
		this.model.power = newVal;
	}

	get diagnostic() {
		return JSON.stringify(this.model);
	}
}
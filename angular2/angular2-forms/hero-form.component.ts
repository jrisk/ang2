import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'
import {Hero} from './hero'

@Component({
	selector: '<hero-form>',
	templateUrl: 'hero-form.component.html'
})

export class HeroFormComponent {
	powers = ["Fire", "Water", "Earth", "Can become invisible when no one is around"];

	model = new Hero(4567, "Dr. Invis", this.powers[3], "Alter E. Go");

	submitted = false;

	onSubmit() {
		this.submitted = true;
	}

	//TODO: remove this one done

	get diagnostic() {
		return JSON.stringify(this.model);
	}


}
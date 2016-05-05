import {Component, Input} from 'angular2/core'
import {HeroFormComponent} from './hero-form.component'

@Component({
	selector: 'form-app', //putting <form-app> instead of just the string 'form-app' 
	//leads to a very insidious error
	template: `<hero-form [id]="what"></hero-form>{{test}}`,
	directives: [HeroFormComponent],
	inputs: ['what']
})

export class FormAppComponent {

	test = "blahblah";
	what = "another test of whatl....";
	
}
import {Component} from 'angular2/core'
import {HeroFormComponent} from './hero-form.component'

@Component({
	selector: 'form-app', //putting <form-app> instead of just the string 'form-app' 
	//leads to a very insidious error
	template: `<hero-form></hero-form>`,
	directives: [HeroFormComponent]
})

export class FormAppComponent {
	
}
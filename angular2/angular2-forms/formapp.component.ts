import {Component} from 'angular2/core'
import {HeroFormComponent} from './hero-form.component'

@Component({
	selector: '<form-app>',
	template: '<hero-form></hero-form>',
	directives: [HeroFormComponent]
})

export class FormAppComponent {
	
}
import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {NgForm} from 'angular2/common'

@Component({
	templateUrl: 'app/public/views/login.component.html'
})

export class LoginComponent {
	
	validate(name, password) {
		console.log(name);
		console.log(password);
	}
}

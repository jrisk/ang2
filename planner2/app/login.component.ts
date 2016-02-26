import {Component} from 'angular2/core'
import {Router} from 'angular2/router'

@Component({
	templateUrl: 'app/public/views/login.component.html'
})

export class LoginComponent {

	name: Control;
	username: Control;
	
	validate(name, password) {
		console.log(name);
		console.log(password);
	}
}

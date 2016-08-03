import {Component} from '@angular/core';
import {HeroParentComponent} from './heroparent.component';

@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.html',
	directives: [HeroParentComponent]
})

export class AppComponent {
	
}
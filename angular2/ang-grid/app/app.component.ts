import {Component} from 'angular2/core';
import {Grid} from './grid';
import {Column} from './column';
import {GridHome} from './gridhome';

interface Person {
		firstName: string;
		lastName: string;
		age: number;
	}

@Component({
	selector: 'home-app',
	template: `<my-app></my-app>`,
	providers: [Grid],
	inputs: ['rows: rows','columns: columns'],
})

export class AppComponent {

}

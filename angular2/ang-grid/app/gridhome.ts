import {Component} from 'angular2/core';
import {Grid} from './grid';
import {Column} from './column';

@Component({
	selector: 'my-app',
	template: `<grid [rows]='people' 
					 [columns]='columns'>
			   </grid>`,
	inputs: ['rows: rows','columns: columns'],
	directives: [Grid],
	providers: [Grid]
})

export class GridHome {

	people: Array<Person>;
	columns: Array<Column>;

	constructor() {
		this.people = this.getPeople(); 
		this.columns = this.getColumns(); 
	}

	getPeople(): Array<Person> {
		return [
			{ firstName: 'Joe', lastName: 'Jackson', age: 20 },
			{ firstName: 'Peter', lastName: 'Smith', age: 30 },
			{ firstName: 'Jane', lastName: 'Doe', age: 50 },
			{ firstName: 'Tim', lastName: 'Smith', age: 80 }
		];
	}

	getColumns(): Array<Column> {
		return [
			new Column('firstName', 'First Name'),
			new Column('lastName', 'Last Name'),
			new Column('age', 'Age')
		];
	}

}

interface Person {
		firstName: string;
		lastName: string;
		age: number;
	}

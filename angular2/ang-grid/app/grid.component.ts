import {Component} from '@angular/core';
import {GridComp} from './grid';
import {ColumnComp} from './column';

@Component({
	selector: 'my-app',
	directives:[GridComp],
    template:'<grid name="person grid" [rows]="people" [columns]="columns"></grid>'
})

export class AppComponent {

    people: Array<Person>;
    columns: Array<ColumnComp>;

    constructor() {

        this.people = this.getPeople();
        this.columns = this.getColumns();
    }

    getPeople(): Array<Person> {
        return [
            {firstName:'Joe',lastName:'Jackson',age:20},
            {firstName:'Peter',lastName:'Smith',age:30},
            {firstName:'Jane',lastName:'Doe',age:50},
            {firstName:'Tim',lastName:'Smith',age:80}
        ];
    }

    getColumns(): Array<ColumnComp> {
        return [
            new ColumnComp('firstName','First Name'),
            new ColumnComp('lastName','Last Name'),
            new ColumnComp('age','Age')
        ];
    }
}

interface Person {
    firstName:string;
    lastName:string;
    age:number;
}

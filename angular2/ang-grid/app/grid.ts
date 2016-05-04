import {Component, Input, OnInit} from 'angular2/core';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({ 
	selector: 'grid',
	inputs: ['rows: rows','columns: columns'],
	template: `<table class="table table-striped">
    <thead>
        <tr>
            <td *ngFor="let col of columns"><a (click)="sort(col.name)">{{col.descr}}</a></td>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let row of rows">
            <td *ngFor="let col of columns">{{row[col.name]}}</td>
        </tr>
    </tbody>
</table>`
}) 

export class Grid implements OnInit{ 
	
	columns:Array<Column>; 
	rows:Array<any>; 
	sorter = new Sorter();

	@Input() name: string;
	
	sort(key){ 
		this.sorter.sort(key, this.rows); 
	}

	ngOnInit() {
		console.log(this.name);
	}
}
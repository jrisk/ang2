import {Component, Input, OnInit} from '@angular/core';
import {ColumnComp} from './column';
import {SorterComp} from './sorter';

@Component({
    selector: 'grid',
    inputs: ['rows: rows','columns: columns'],
    templateUrl: './app/grid.component.html'
})

export class GridComp implements OnInit{

    columns:Array<ColumnComp>;
    rows:Array<any>;

    @Input() name:string;

    sorter = new SorterComp();

    sort(key){
        this.sorter.sort(key, this.rows);
    }

    ngOnInit(){
        console.log(this.name);
    }
}
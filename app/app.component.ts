import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

interface Hero {
	id: number;
	name?: string;
};

var HEROES: Hero[] = [
	{ "id": 11, "name": "SilverSurfer" },
	{ "id": 12, "name": "Batman" },
	{ "id": 13, "name": "Whateverdude" },
	{ "id": 14, "name": "WhyMan" }
];

@Component({
	selector: 'my-app',
	directives: [FORM_DIRECTIVES],
	template: `<h1>{{title}}</h1>
<h2>Heroes List<h2>
<ul class="heroes">
<li *ngFor="#hero of heroes" (click)="onSelect(hero)">
	<span class="badge">{{hero.id}}</span> {{hero.name}}
</li>
</ul>
<input [(ngModel)]="heroes[1].name" placeholder="name">
`,
	styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 10em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #EEE;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0em 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0px 0px 4px;
      }
    `]
})

export class AppComponent { 
	public title = "Heroes";
	public heroes = HEROES;
}



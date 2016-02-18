import {Component} from 'angular2/core'

@Component({
	selector: 'planner',
	template: `<h1>{{title}}</h1><hr>
	<h2>{{message}}</h2>`,
	styles: [`
	h1 {
		font-family: Ariel, Times New Roman;
		box-shadow: 0.2em 0.2em 0.2em #999;
	}
	h2 {
		font-color: blue;
		background-color: yellow;
		border: .5em solid black;
	}
	`],
	directives: []
})

export class PlannerComponent {
	public title = "Planner Angular+Node+Express";
	public message = "Hello!";
}



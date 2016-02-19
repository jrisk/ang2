import {Component} from 'angular2/core'
import {Plan} from './plan'

interface Week {
	monday: boolean;
	tuesday: boolean;
	wednesday: boolean;
	thursday: boolean;
	friday: boolean;
	saturday: boolean;
	sunday: boolean;
}

@Component({
	selector: 'planner',
	template: `<h1>{{title}}</h1><hr>
	<h2>{{message}}</h2>
	<h3>{{plan.title}}</h3>
	<input [(ngModel)]="plan.title" placeholder="plan title yo">`,
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

	public plan: Plan = {
		title: 'Plan GoTo'
	}
}



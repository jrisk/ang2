import {Component, OnInit} from 'angular2/core'
import {PlanService} from './plan.service'
import {PlannerComponent} from './planner.component'

@Component({
	selector: 'planner',
	template: `<h1>{{title}}</h1><hr>
	<h2>{{message}}</h2>
	<plan-dash></plan-dash>
	`,
	styles: [`
	h1 {
		font-family: Ariel, Times New Roman;
		box-shadow: 0.2em 0.2em 0.2em #999;
	}
	h2 {
		color: #888;
	}
	`],
	directives: [PlannerComponent],
	providers: [PlanService]
})

export class AppComponent { //dont need implements OnInit for ngOnInit to work
	public title = "Planner Angular+Node+Express";
	public message = "Hello!";
}



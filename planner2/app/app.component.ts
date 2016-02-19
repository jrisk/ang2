import {Component, OnInit} from 'angular2/core'
import {Plan} from './plan'
import {PlanService} from './plan.service'

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
	<!--<h3>{{plan.title}}</h3>
	<input [(ngModel)]="plan.title" placeholder="plan title yo">-->
	<ul class="plans">
	<li *ngFor="#plan of plans">
	<span>{{plan.date}}</span><b>{{plan.start}}</b>
	</li>
	</ul>
	`,

	styles: [`
	h1 {
		font-family: Ariel, Times New Roman;
		box-shadow: 0.2em 0.2em 0.2em #999;
	}
	h2 {
		font-color: blue;
	}
	`],
	directives: [],
	providers: [PlanService]
})

export class PlannerComponent {
	public title = "Planner Angular+Node+Express";
	public message = "Hello!";
	public plans: Plan[];

	constructor(public _planService: PlanService) { };

	getPlans() {
		this._planService.getPlans().then(plans => this.plans = plans);
	}

	ngOnInit() {
		this.getPlans();
	}
}



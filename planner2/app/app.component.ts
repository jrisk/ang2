import {Component, OnInit} from 'angular2/core'
import {Plan} from './plan'
import {PlanService} from './plan.service'
import {PlanDetailComponent} from './plan_detail.component'

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
	<li *ngFor="#plan of plans" (click)="onPress(plan)">
	<span>{{plan.date}}</span><b>{{plan.start}}</b>
	</li>
	</ul>
	<plan-detail [plan]="pressedPlan"></plan-detail>
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
	directives: [PlanDetailComponent],
	providers: [PlanService]
})

export class PlannerComponent {
	public title = "Planner Angular+Node+Express";
	public message = "Hello!";

	public onPress(plan: Plan) {
		this.pressedPlan = plan;
	}

	public pressedPlan: Plan;

	public plans: Plan[];

	constructor(public _planService: PlanService) { };

	getPlans() {
		this._planService.getPlans().then(plans => this.plans = plans);
	}

	ngOnInit() {
		this.getPlans();
	}
}



import {Component, OnInit} from 'angular2/core'
import {Plan} from './plan'
import {PlanService} from './plan.service'
import {PlanDetailComponent} from './plan_detail.component'
import {Router} from 'angular2/router'

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
	selector: 'plan-dash',
	template: `<h1>{{title}}</h1><hr>
	<h2>{{message}}</h2>
	<ul class="plans">
	<li id="lister" *ngFor="#plan of plans" (click)="onPress(plan)">
	<span>{{plan.date}}</span><b>{{plan.start}}</b>
	</li>
	</ul>
	<div *ngIf="pressedPlan">
		<h2> {{pressedPlan.title || uppercase}} is the current plan </h2>
		<button (click)="goToDetail()">Go to Full Plan</button>
		</div>
	`,
	styles: [`
	h1 {
		font-family: Ariel, Times New Roman;
		box-shadow: 0.2em 0.2em 0.2em #999;
	}
	h2 {
		font-color: blue;
	}
	lister {
		font-color: red;
	}
	`],
	directives: [PlanDetailComponent],
})

export class PlannerComponent implements OnInit { //dont need implements OnInit for ngOnInit to work

	public plans: Plan[];
	public pressedPlan: Plan;

	constructor(
		private _router: Router,
		private _planService: PlanService) { };

	getPlans() {
		this._planService.getPlans().then(plans => this.plans = plans);
	}

	ngOnInit() {
		this.getPlans();
	}

	onPress(plan: Plan) {
		this.pressedPlan = plan;
	}

	goToDetail() {
		let link = ['PlanDetail', { id: this.pressedPlan.id }];
		this._router.navigate(link);
	}
}
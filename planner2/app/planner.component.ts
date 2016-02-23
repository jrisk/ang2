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
	templateUrl: '../public/planner.component.html',
	styleUrls: ['../public/css/planner.component.css'],
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
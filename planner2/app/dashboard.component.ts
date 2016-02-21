import {Component, OnInit} from 'angular2/core'
import {Plan} from './plan'
import {PlanService} from './plan.service'
import {Router} from 'angular2/router'

@Component({
	selector: 'dashboard',
	templateUrl: '../public/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

	public plans: Plan[] = [];

	constructor(
		private _planService: PlanService,
		private _router: Router) { }

	ngOnInit() {
		this._planService.getPlans()
			.then(plans => this.plans = plans.slice(2, 3));
	}

	goToDetail(plan: Plan) {
		let link = ['PlanDetail', { id: plan.id }];
		this._router.navigate(link);
	}

}
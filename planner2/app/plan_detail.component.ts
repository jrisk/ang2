import {Component, OnInit} from 'angular2/core'
import {Plan} from './plan'
import {PLANS} from './mock_plans' //shouldnt have to importthis if its avaialbel in planservice??
import {RouteParams} from 'angular2/router'
import {PlanService} from './plan.service'

@Component({
	selector: 'plan-detail',
	templateUrl: './plan_detail.component.html',
	inputs: ['plan']
})

export class PlanDetailComponent {
	public plan: Plan;

	constructor(private _planService: PlanService,
		private _routeParams: RouteParams) { }

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._planService.getPlans(id)
		.then(plan => this.plan = plan)
	}

	getPlans(id: number) {
		return Promise.resolve(PLANS).then(
			plans => plans.filter(plan => plan.id === id)[0]
		);
	}

	goBack() {
		window.history.back();
	}
}
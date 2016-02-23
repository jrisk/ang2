import {Component, OnInit} from 'angular2/core'
import {Plan} from './plan'
import {RouteParams} from 'angular2/router'
import {PlanService} from './plan.service'

@Component({
	selector: 'plan-detail',
	templateUrl: 'app/public/views/plan_detail.component.html',
	inputs: ['plan']
})

export class PlanDetailComponent implements OnInit {
	public plan: Plan;

	constructor(private _planService: PlanService,
		private _routeParams: RouteParams) { }

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._planService.getPlan(id)
		.then(plan => this.plan = plan)
	}
	goBack() {
		window.history.back();
	}

	goPrint() {
		window.print();
	}
}
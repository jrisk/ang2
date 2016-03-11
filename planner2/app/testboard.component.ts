import {Component, OnInit} from 'angular2/core'
import {NewPlan} from './new_plan'
import {NewPlanService} from './new_plan.service'

@Component({
	selector: 'test',
	templateUrl: 'app/public/views/testboard.component.html',
	inputs: ['newplan']
})

export class TestBoard {
	public newplan;
	public newplans;//: NewPlan[] = [];

	constructor(
		private _newPlanService: NewPlanService) {}

	newDetails(newplan: NewPlan[]) {
		this.newplan = newplan;
	}

	ngOnInit() {
		this._newPlanService.getNewPlans();//.then(newplans => this.newplans = newplans)
	}
}
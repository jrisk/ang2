import {Component, OnInit} from 'angular2/core'
import {NewPlan} from './new_plan'
import {NewPlanService} from './new_plan.service'

@Component({
	selector: 'test',
	templateUrl: 'app/public/views/testboard.component.html',
	inputs: ['newplan']
})

export class TestBoard {
	public newplan: NewPlan;
	public newplans: any;

	public dateArr = [];

	constructor(
		private _newPlanService: NewPlanService) {}

	newDetails(newplan: NewPlan) {
		this.newplan = newplan;
	}

	ngOnInit() {
		Promise.resolve(this._newPlanService.getNewPlans())
			.then(newplans => this.newplans = newplans);

		var newArr = [];
		this._newPlanService.getNewPlans().forEach(
			(source) => {
				console.log(source);
				var i;
				for (i = 0; i < source.length; i++) {
					if (newArr.indexOf(source[i].date) == -1) {
						newArr.push(source[i].date);
						console.log(source[i].date);
						}
					}
				console.log(newArr);
				},
			(next) => {
			}
		)
	}
}
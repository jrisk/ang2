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
			.then(newplans => this.newplans = newplans).then(
			(data) => console.log(data));

		var newArr = [];

		/*var newMap = this._newPlanService.getNewPlans().map(
			(source, i) => {
				console.log(source);
				console.log(i);
				if (newArr.indexOf(source[i].start) == -1) {
					newArr.push(source[i].start);
				}
				else {
					console.log('got the else');
				}
				console.log(newArr);
			});

		newMap.forEach(function(something) {
			console.log(something);
		},
			function(hmm) {
				console.log(hmm);
			});*/

		var invalid = 0;

		var filterMap = this._newPlanService.getNewPlans().filter(
			function (item) {
				return item[2].start.valueOf(); //obs.indexOf(item[ind].start == -1);
			});

		filterMap.subscribe(
			(why) => { console.log('next on filter: %s', why.start); },
			(err) => { console.log('err: ', err); },
			() => { console.log('completed on filter'); }
		);

		/*newMap.subscribe(
			(x) => { console.log('next: %s', x); },
			(err) => { console.log('error: %s ',  err); },
			() => { console.log('on completed...'); }
		)*/
	}
}
import {Plan} from './plan'
import {PLANS} from './mock_plans'
import {Injectable} from 'angular2/core'

@Injectable();

export class PlanService {
	getPlans() {
		return Promise.resolve(PLANS);
	}

	getPlan(id: number) {
		return Promise.resolve(PLANS).then(
			plans => plans.filter(plan => plan.id === id)[0]
		);
	}
}





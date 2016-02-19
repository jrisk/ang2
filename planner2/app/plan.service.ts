import {PLANS} from './mock_plans'
import {Injectable} from 'angular2/core'

@Injectable();

export class PlanService {
	getPlans() {
		return Promise.resolve(PLANS);
	}
}





import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core'
import {NewPlan} from './new_plan'

@Injectable()

export class NewPlanService {
	//newtest: 
	http: Http;
	constructor(http:Http) {
		console.log('creating New Plans service for served event.json file');
		this.http = http;
	}

	getNewPlans() {
		return Promise.resolve(this.http.get('mocktest.json').map(res => res.json()));
	}
}

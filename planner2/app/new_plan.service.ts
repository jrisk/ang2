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
		return this.http.get('events.json').map(res => res.json());
	}
}

import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core'

@Injectable()

export class NewPlanService {
	http: Http;
	constructor(http:Http) {
		console.log('creating New Plans service for served event.json file');
		this.http = http;
	}

	getNewPlans() {
		return this.http.get('mocktest.json').map(res => res.json()).forEach(
			function(i) {
				console.log(i);
			},
			function onError(err) {
				console.log(err);
			}
		)
	}
}

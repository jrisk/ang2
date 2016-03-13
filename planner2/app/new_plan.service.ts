import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core'
import {NewPlan} from './new_plan'

@Injectable()

export class NewPlanService {
	http: Http;
	constructor(http:Http) {
		console.log('creating New Plans service for served event.json file');
		this.http = http;
	}

	getNewPlans() {
		return this.http.get('events.json').map(res => res.json());
			/*.subscribe(
			(resp) => {
				console.log('in onNext 1st function call');
				console.log(resp.date);
				if (newArr.indexOf(resp.date) == -1) {
					newArr.push(resp.date);
					console.log(resp.date);
				}
				else {
					console.log('throw err?');
				}
			},
			(err) => {
				console.log(err);
			},
			() => {
				console.log('completed promise forEach');
				console.log(newArr);
			})*/
	}
}

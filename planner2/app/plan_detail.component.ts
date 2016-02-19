import {Component} from 'angular2/core'
import {Plan} from './plan'

@Component({
	selector: 'plan-detail',
	template: `
	<div *ngIf="plan">
	<h1>{{plan.title}}</h1>
	<h2>Ends at: {{plan.end}}</h2>
	</div>`,
	inputs: ['plan']
})

export class PlanDetailComponent {
	public plan: Plan;
}
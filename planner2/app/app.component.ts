import {Component, OnInit} from 'angular2/core'
import {PlanService} from './plan.service'
import {PlannerComponent} from './planner.component'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router'
import {DashboardComponent} from './dashboard.component'

@Component({
	selector: 'planner',
	template: `<h1>{{title}}</h1><hr>
	<h2>{{message}}</h2>
	<nav>
	<a [routerLink]="['Dashboard']">Dashboard</a>
	<a [routerLink]="['Plans']">Plans</a>
	</nav>
	<router-outlet></router-outlet>
	`,
	styles: [`
	h1 {
		font-family: Ariel, Times New Roman;
		box-shadow: 0.2em 0.2em 0.2em #999;
	}
	h2 {
		color: #888;
	}
	`],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, PlanService]
})

@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true

	},
	{
		path: '/plans',
		name: 'Plans',
		component: PlannerComponent
	}
])

export class AppComponent { //dont need implements OnInit for ngOnInit to work
	public title = "Planner Angular+Node+Express";
	public message = "Hello!";
}



import {Component, OnInit} from 'angular2/core'
import {PlanService} from './plan.service'
import {PlannerComponent} from './planner.component'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router'
import {DashboardComponent} from './dashboard.component'
import {PlanDetailComponent} from './plan_detail.component'
import {LoginComponent} from './login.component'

@Component({
	selector: 'planner',
	templateUrl: 'app/public/views/app.component.html',
	styleUrls: ['app/public/css/app.component.css'],
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
		path: '/detail/:id',
		name: 'PlanDetail',
		component: PlanDetailComponent
	},
	{
		path: '/plans',
		name: 'Plans',
		component: PlannerComponent
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginComponent
	}
])

export class AppComponent { //dont need implements OnInit for ngOnInit to work
	public title = "Planner Angular+Node+Express";
	public message = "Hello!";
}



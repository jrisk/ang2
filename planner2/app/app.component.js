System.register(['angular2/core', './plan.service', './planner.component', 'angular2/router', './dashboard.component', './plan_detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, plan_service_1, planner_component_1, router_1, dashboard_component_1, plan_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (plan_service_1_1) {
                plan_service_1 = plan_service_1_1;
            },
            function (planner_component_1_1) {
                planner_component_1 = planner_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (plan_detail_component_1_1) {
                plan_detail_component_1 = plan_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Planner Angular+Node+Express";
                    this.message = "Hello!";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'planner',
                        templateUrl: 'app/public/views/app.component.html',
                        styleUrls: ['app/public/css/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, plan_service_1.PlanService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'PlanDetail',
                            component: plan_detail_component_1.PlanDetailComponent
                        },
                        {
                            path: '/plans',
                            name: 'Plans',
                            component: planner_component_1.PlannerComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
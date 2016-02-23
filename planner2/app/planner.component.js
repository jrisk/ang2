System.register(['angular2/core', './plan.service', './plan_detail.component', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, plan_service_1, plan_detail_component_1, router_1;
    var PlannerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (plan_service_1_1) {
                plan_service_1 = plan_service_1_1;
            },
            function (plan_detail_component_1_1) {
                plan_detail_component_1 = plan_detail_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PlannerComponent = (function () {
                function PlannerComponent(_router, _planService) {
                    this._router = _router;
                    this._planService = _planService;
                }
                ;
                PlannerComponent.prototype.getPlans = function () {
                    var _this = this;
                    this._planService.getPlans().then(function (plans) { return _this.plans = plans; });
                };
                PlannerComponent.prototype.ngOnInit = function () {
                    this.getPlans();
                };
                PlannerComponent.prototype.onPress = function (plan) {
                    this.pressedPlan = plan;
                };
                PlannerComponent.prototype.goToDetail = function () {
                    var link = ['PlanDetail', { id: this.pressedPlan.id }];
                    this._router.navigate(link);
                };
                PlannerComponent = __decorate([
                    core_1.Component({
                        selector: 'plan-dash',
                        templateUrl: 'app/public/views/planner.component.html',
                        styleUrls: ['app/public/css/planner.component.css'],
                        directives: [plan_detail_component_1.PlanDetailComponent],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, plan_service_1.PlanService])
                ], PlannerComponent);
                return PlannerComponent;
            })();
            exports_1("PlannerComponent", PlannerComponent);
        }
    }
});
//# sourceMappingURL=planner.component.js.map
System.register(['angular2/core', './plan.service', './plan_detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, plan_service_1, plan_detail_component_1;
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
            }],
        execute: function() {
            PlannerComponent = (function () {
                function PlannerComponent(_planService) {
                    this._planService = _planService;
                }
                PlannerComponent.prototype.onPress = function (plan) {
                    this.pressedPlan = plan;
                };
                ;
                PlannerComponent.prototype.getPlans = function () {
                    var _this = this;
                    this._planService.getPlans().then(function (plans) { return _this.plans = plans; });
                };
                PlannerComponent.prototype.ngOnInit = function () {
                    this.getPlans();
                };
                PlannerComponent = __decorate([
                    core_1.Component({
                        selector: 'plan-dash',
                        template: "<h1>{{title}}</h1><hr>\n\t<h2>{{message}}</h2>\n\t<ul class=\"plans\">\n\t<li *ngFor=\"#plan of plans\" (click)=\"onPress(plan)\">\n\t<span>{{plan.date}}</span><b>{{plan.start}}</b>\n\t</li>\n\t</ul>\n\t<plan-detail [plan]=\"pressedPlan\"></plan-detail>\n\t",
                        styles: ["\n\th1 {\n\t\tfont-family: Ariel, Times New Roman;\n\t\tbox-shadow: 0.2em 0.2em 0.2em #999;\n\t}\n\th2 {\n\t\tfont-color: blue;\n\t}\n\t"],
                        directives: [plan_detail_component_1.PlanDetailComponent],
                    }), 
                    __metadata('design:paramtypes', [plan_service_1.PlanService])
                ], PlannerComponent);
                return PlannerComponent;
            })();
            exports_1("PlannerComponent", PlannerComponent);
        }
    }
});
//# sourceMappingURL=planner.component.js.map
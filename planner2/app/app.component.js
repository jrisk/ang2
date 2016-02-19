System.register(['angular2/core', './plan.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, plan_service_1;
    var PlannerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (plan_service_1_1) {
                plan_service_1 = plan_service_1_1;
            }],
        execute: function() {
            PlannerComponent = (function () {
                function PlannerComponent(_planService) {
                    this._planService = _planService;
                    this.title = "Planner Angular+Node+Express";
                    this.message = "Hello!";
                }
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
                        selector: 'planner',
                        template: "<h1>{{title}}</h1><hr>\n\t<h2>{{message}}</h2>\n\t<!--<h3>{{plan.title}}</h3>\n\t<input [(ngModel)]=\"plan.title\" placeholder=\"plan title yo\">-->\n\t<ul class=\"plans\">\n\t<li *ngFor=\"#plan of plans\">\n\t<span>{{plan.date}}</span><b>{{plan.start}}</b>\n\t</li>\n\t</ul>\n\t",
                        styles: ["\n\th1 {\n\t\tfont-family: Ariel, Times New Roman;\n\t\tbox-shadow: 0.2em 0.2em 0.2em #999;\n\t}\n\th2 {\n\t\tfont-color: blue;\n\t}\n\t"],
                        directives: [],
                        providers: [plan_service_1.PlanService]
                    }), 
                    __metadata('design:paramtypes', [plan_service_1.PlanService])
                ], PlannerComponent);
                return PlannerComponent;
            })();
            exports_1("PlannerComponent", PlannerComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
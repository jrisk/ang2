System.register(['angular2/core', './plan.service', './planner.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, plan_service_1, planner_component_1;
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
                        template: "<h1>{{title}}</h1><hr>\n\t<h2>{{message}}</h2>\n\t<plan-dash></plan-dash>\n\t",
                        styles: ["\n\th1 {\n\t\tfont-family: Ariel, Times New Roman;\n\t\tbox-shadow: 0.2em 0.2em 0.2em #999;\n\t}\n\th2 {\n\t\tcolor: #888;\n\t}\n\t"],
                        directives: [planner_component_1.PlannerComponent],
                        providers: [plan_service_1.PlanService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
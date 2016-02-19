System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PlanDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlanDetailComponent = (function () {
                function PlanDetailComponent() {
                }
                PlanDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'plan-detail',
                        template: "\n\t<div *ngIf=\"plan\">\n\t<h1>{{plan.title}}</h1>\n\t<h2>Ends at: {{plan.end}}</h2>\n\t</div>",
                        inputs: ['plan']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlanDetailComponent);
                return PlanDetailComponent;
            })();
            exports_1("PlanDetailComponent", PlanDetailComponent);
        }
    }
});
//# sourceMappingURL=plan_detail.component.js.map
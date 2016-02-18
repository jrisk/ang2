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
    var PlannerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlannerComponent = (function () {
                function PlannerComponent() {
                    this.title = "Planner Angular+Node+Express";
                    this.message = "Hello!";
                }
                PlannerComponent = __decorate([
                    core_1.Component({
                        selector: 'planner',
                        template: "<h1>{{title}}</h1><hr>\n\t<h2>{{message}}</h2>",
                        styles: ["\n\th1 {\n\t\tfont-family: Ariel, Times New Roman;\n\t\tbox-shadow: 0.2em 0.2em 0.2em #999;\n\t}\n\th2 {\n\t\tfont-color: blue;\n\t\tbackground-color: yellow;\n\t\tborder: .5em solid black;\n\t}\n\t"],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlannerComponent);
                return PlannerComponent;
            })();
            exports_1("PlannerComponent", PlannerComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
System.register(['angular2/core', './hero-form.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_form_component_1;
    var FormAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            }],
        execute: function() {
            test = "bababooey";
            FormAppComponent = (function () {
                function FormAppComponent() {
                    this.test = "blahblah";
                    this.what = "another test of whatl....";
                }
                FormAppComponent = __decorate([
                    core_1.Component({
                        selector: 'form-app',
                        //leads to a very insidious error
                        template: "<hero-form [id]=\"what\"></hero-form>{{test}}",
                        directives: [hero_form_component_1.HeroFormComponent],
                        inputs: ['what']
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormAppComponent);
                return FormAppComponent;
            })();
            exports_1("FormAppComponent", FormAppComponent);
        }
    }
});
//# sourceMappingURL=formapp.component.js.map
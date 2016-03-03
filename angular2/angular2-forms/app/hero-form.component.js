System.register(['angular2/core', './hero'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1;
    var HeroFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            HeroFormComponent = (function () {
                function HeroFormComponent() {
                    //powers doesnt appear on new hero button, must be reset manually diffrent in newHero()
                    this.powers = ["Fire", "Water", "Earth", "invisibility", "Can become invisible when no one is around"];
                    this.model = new hero_1.Hero(9876, "The Invisible Man", "invisibility", "kenny chesney");
                    this.submitted = false;
                    this.active = true; // workaround flag
                }
                HeroFormComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                HeroFormComponent.prototype.newHero = function () {
                    var _this = this;
                    this.model = new hero_1.Hero(1337, '', '');
                    //workaround for proper form reset feature, this is a hack
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
                    get: function () {
                        return JSON.stringify(this.model);
                    },
                    enumerable: true,
                    configurable: true
                });
                HeroFormComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-form',
                        templateUrl: './app/hero_form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroFormComponent);
                return HeroFormComponent;
            }());
            exports_1("HeroFormComponent", HeroFormComponent);
        }
    }
});
//# sourceMappingURL=hero-form.component.js.map
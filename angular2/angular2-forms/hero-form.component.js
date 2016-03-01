System.register(['angular2/core', './hero'], function(exports_1) {
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
            let HeroFormComponent = class {
                constructor() {
                    this.powers = ["Fire", "Water", "Earth", "Can become invisible when no one is around"];
                    this.model = new hero_1.Hero(4567, "Dr. Invis", this.powers[3], "Alter E. Go");
                    this.submitted = false;
                }
                onSubmit() {
                    this.submitted = true;
                }
                //TODO: remove this one done
                get diagnostic() {
                    return JSON.stringify(this.model);
                }
            };
            HeroFormComponent = __decorate([
                core_1.Component({
                    selector: '<hero-form>',
                    templateUrl: 'hero-form.component.html'
                }), 
                __metadata('design:paramtypes', [])
            ], HeroFormComponent);
            HeroFormComponent = HeroFormComponent;
        }
    }
});
//# sourceMappingURL=hero-form.component.js.map
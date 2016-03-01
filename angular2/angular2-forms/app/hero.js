System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(id, name, power, AlterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.AlterEgo = AlterEgo;
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
/*let myHero = new Hero(1234, 'SuperDude', 'super strength', 'Kevin');

console.log(myHero.name + myHero.power + myHero.id + myHero.AlterEgo);*/ 
//# sourceMappingURL=hero.js.map
System.register([], function(exports_1) {
    var Hero, myHero;
    return {
        setters:[],
        execute: function() {
            class Hero {
                constructor(id, name, power, AlterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.AlterEgo = AlterEgo;
                }
            }
            Hero = Hero;
            let myHero = new Hero(1234, 'SuperDude', 'super strength', 'Kevin');
            console.log(myHero.name + myHero.power + myHero.id + myHero.AlterEgo);
        }
    }
});
//# sourceMappingURL=hero.js.map
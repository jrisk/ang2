System.register([], function(exports_1) {
    var Hero, myHero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(id, name, power, alterego) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterego = alterego;
                }
                return Hero;
            })();
            exports_1("Hero", Hero);
            myHero = new Hero(5544, "aylmaoman", "super vision", "nerdo");
            console.log(myHero);
        }
    }
});
//# sourceMappingURL=hero.js.map
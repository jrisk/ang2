var Hero = (function () {
    function Hero(id, name, power, AlterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.AlterEgo = AlterEgo;
    }
    return Hero;
})();
exports.Hero = Hero;
var myHero = new Hero(1234, 'SuperDude', 'super strength', 'Kevin');
console.log(myHero.name + myHero.power + myHero.id + myHero.AlterEgo);

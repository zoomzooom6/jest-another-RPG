const Potion = require('./Potion');
const Character = require('./Character');

//ES6 constructor declaration
class Enemy extends Character {
    constructor(name, weapon) {
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

//ES5 constructor declaration
// function Enemy(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//Enemy.prototype = Object.create(Character.prototype);

//     this.health = Math.floor(Math.random()*10+85);
//     this.strength = Math.floor(Math.random()*5+5);
//     this.agility = Math.floor(Math.random()*5+5);
// }

// Enemy.prototype.getDescription = function() {
//     return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };

module.exports = Enemy;
const Potion = require('../lib/Potion');
const Character = require('./Character');

//ES6 constructor declarations
class Player extends Character {
    constructor(name = '') {

        //call parent constructor here
        super(name);
        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}

//ES5 constructor declarations
// function Player(name = '') {
//     this.name = name;

//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);
//     this.inventory = [new Potion('health'), new Potion()];
// }

//inherit prototype methods of Character here:
//Player.prototype = Object.create(Character.prototype);

// Player.prototype.getStats = function () {
//     return {
//         potions: this.inventory.length,
//         health: this.health,
//         strength: this.strength,
//         agility: this.agility
//     };
// };

// Player.prototype.getInventory = function () {
//     if (this.inventory.length) {
//         return this.inventory;
//     }
//     return false;
// };

// Player.prototype.addPotion = function (potion) {
//     this.inventory.push(potion);
// };

// Player.prototype.usePotion = function (index) {
//     const potion = this.getInventory().splice(index, 1)[0];

//     switch (potion.name) {
//         case 'agility':
//             this.agility += potion.value;
//             break;
//         case 'health':
//             this.health += potion.value;
//             break;
//         case 'strength':
//             this.strength += potion.value;
//             break;
//     }
// };

module.exports = Player;
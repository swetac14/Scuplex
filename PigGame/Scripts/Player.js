// Player as Class
class Player {
    // Special constructor method
    constructor(name, score, turnTotal) {
        // Set properties
        this.name = name;
        this.score = score;
        this.turnTotal = turnTotal;
        // Output creation message
        console.log(`'Created Person via class: ${name} got ${score} and turn total ${turnTotal}'`);
    }
}
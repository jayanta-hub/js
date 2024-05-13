class Character {
  constructor(speed) {
    this.speed = speed;
  }

  move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
}

class Enemy extends Character {
  constructor(power, speed) {
    super(speed);
    this.power = power;
  }

  attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}

class Alien extends Enemy {
  constructor(name, phrase, power, speed) {
    super(power, speed);
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
    console.log('power', power)
  }
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
  sayPhrase = () => console.log(this.phrase);
}
const bug1 = new Alien(15, 10);
const Robot1 = new Alien(10, 15);
console.log(bug1.attack());

class Pizza {
  size: string;
  type: string;

  constructor() {
    this.size = "Uknown size";
    this.type = "Uknown type";
  }

  getSize() {
    return this.size;
  }

  getType() {
    return this.type;
  }

  cost() {
    return 0;
  }
}

class TomatoPizza extends Pizza {
  constructor() {
    super();
    this.type = "TomatoPizza";
  }

  cost(): number {
    return 3.3;
  }
}

class WhiteSaucePizza extends Pizza {
  constructor() {
    super();
    this.type = "WhiteSaucePizza";
  }

  cost(): number {
    return 4.1;
  }
}

class Toppings extends Pizza {}

class BlackOlives extends Toppings {
  pizza: Pizza;

  constructor(pizza: pizza) {
    super();
    this.pizza = pizza;
  }

  cost(): number {
    return this.pizza.cost() + 0.2;
  }
}

class Potato extends Toppings {
  cost(): number {
    return this.pizza.cost() + 0.4;
  }
}

class Pepperoni extends Toppings {
  cost(): number {
    return this.pizza.cost() + 0.3;
  }
}

class MoreCheeze extends Toppings {
  cost(): number {
    return this.pizza.cost() + 0.5;
  }
}

const myPizza = new TomatoPizza();
const pepperoniPizza = new Pepperoni(myPizza);
const pepperoniblackolivePizza = new BlackOlives(pepperoniPizza);
const morecheezeperpperoniblackolivePizza = new MoreCheeze(
  pepperoniblackolivePizza
);

console.log(morecheezeperpperoniblackolivePizza.cost());

const myfirstwhitePizza = new WhiteSaucePizza();
const pepperoniwhitePizza = new Pepperoni(myfirstwhitePizza);

console.log(pepperoniwhitePizza.cost());

const mysecondwhitePizza = new WhiteSaucePizza();
const blackoliveswhitePizza = new BlackOlives(mysecondwhitePizza);
const potatoblackoliveswhitePizza = new Potato(blackoliveswhitePizza);

console.log(potatoblackoliveswhitePizza.cost());

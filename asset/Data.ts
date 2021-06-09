import Food from "./Materials/Food.js";
import Worm from "./Materials/Worm.js";
import Explode from "./Materials/Explode";

export default class Data {
  public static instance: Data;

  private worm: Worm
  private food: Food;
  private explodes: Explode[];

  constructor() {
    const stageWidth = document.body.clientWidth;
    const stageHeight = document.body.clientHeight;

    this.worm = new Worm(stageWidth / 2, stageHeight / 2);
    this.food = new Food();
    this.explodes = [];
  }

  public static getInstance(): Data {
    if (!this.instance) this.instance = new Data();
    return this.instance;
  }

  get get_worm(): Worm { return this.worm; }

  get get_food(): Food { return this.food; }
  set set_food(food: Food) { this.food = food; }

  get get_explodes(): Explode[] { return this.explodes; }
  set set_explodes(explode: Explode) { this.explodes.push(explode); }
}
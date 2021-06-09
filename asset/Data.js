import Food from "./Materials/Food.js";
import Worm from "./Materials/Worm.js";
export default class Data {
    constructor() {
        const stageWidth = document.body.clientWidth;
        const stageHeight = document.body.clientHeight;
        this.worm = new Worm(stageWidth / 2, stageHeight / 2);
        this.food = new Food();
        this.explodes = [];
    }
    static getInstance() {
        if (!this.instance)
            this.instance = new Data();
        return this.instance;
    }
    get get_worm() { return this.worm; }
    get get_food() { return this.food; }
    set set_food(food) { this.food = food; }
    get get_explodes() { return this.explodes; }
    set set_explodes(explode) { this.explodes.push(explode); }
}

import { positive_or_negative } from "../Util/Tool.js";
export default class Particle {
    constructor(x, y, r, color) {
        this.life = true;
        this.postion = { x, y };
        const velocity_x = positive_or_negative() ? Math.random() * 8 : -(Math.random() * 8);
        const velocity_y = positive_or_negative() ? Math.random() * 8 : -(Math.random() * 8);
        this.velocity = { x: velocity_x, y: velocity_y };
        this.r = r;
        this.COLOR = color;
    }
    life_check() {
        const stageWidth = document.body.clientWidth;
        const stageHeight = document.body.clientHeight;
        if (this.postion.x < 0
            || this.postion.x > stageWidth
            || this.postion.y < 0
            || this.postion.y > stageHeight
            || this.r < .1)
            this.life = false;
    }
    get get_life() { return this.life; }
    animate() {
        this.life_check();
        this.postion.x += this.velocity.x;
        this.postion.y += this.velocity.y;
        this.r *= .95;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.postion.x, this.postion.y, this.r, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = this.COLOR;
        ctx.fill();
    }
}

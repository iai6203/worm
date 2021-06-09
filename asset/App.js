import Data from "./Data.js";
class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.stageWidth = 0;
        this.stageHeight = 0;
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        this.span_of_explode_cnt = document.querySelector('div.info span.explode-cnt');
        this.span_of_tiny_circle_cnt = document.querySelector('div.info span.tiny-circle-cnt');
        window.requestAnimationFrame(this.animate.bind(this));
    }
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }
    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        const food = Data.getInstance().get_food;
        food.draw(this.ctx);
        const worm = Data.getInstance().get_worm;
        worm.animate();
        worm.draw(this.ctx);
        const explodes = Data.getInstance().get_explodes;
        let tiny_circle_cnt = 0;
        for (let i = 0; i < explodes.length; i++) {
            const explode = explodes[i];
            tiny_circle_cnt += explode.get_particle_cnt;
            if (!explode.get_life) {
                explodes.splice(i, 1);
                i--;
            }
            explode.animate();
            explode.draw(this.ctx);
        }
        this.span_of_explode_cnt.innerHTML = String(explodes.length);
        this.span_of_tiny_circle_cnt.innerHTML = String(tiny_circle_cnt);
    }
}
window.onload = () => { new App(); };

export default class Food {
    constructor() {
        this.RADIUS = 10;
        this.COLOR = '#ef4141';
        const stageWidth = document.body.clientWidth;
        const stageHeight = document.body.clientHeight;
        this.position = {
            x: Math.random() * (stageWidth - 100) + 50,
            y: Math.random() * (stageHeight - 100) + 50
        };
    }
    get get_position() { return this.position; }
    get get_radius() { return this.RADIUS; }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.RADIUS, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = this.COLOR;
        ctx.fill();
    }
}

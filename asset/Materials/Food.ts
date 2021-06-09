import {Position} from "../Interfaces/Global.js";

export default class Food {
  private readonly RADIUS: number;
  private readonly COLOR: string;

  private readonly position: Position;

  constructor() {
    this.RADIUS = 10;
    this.COLOR = '#ef4141';

    const stageWidth = document.body.clientWidth;
    const stageHeight = document.body.clientHeight;

    this.position = {
      x: Math.random() * (stageWidth - 100) + 50,
      y: Math.random() * (stageHeight - 100) + 50
    }
  }

  get get_position(): Position { return this.position; }
  get get_radius(): number { return this.RADIUS; }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.RADIUS, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = this.COLOR;
    ctx.fill();
  }
}
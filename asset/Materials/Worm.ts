import Data from "../Data.js";
import Food from "./Food.js";
import Explode from "./Explode.js";
import { Position } from "../Interfaces/Global.js";
import { get_angle, rotate_vector, get_distance } from "../Util/Math.js";

export default class Worm {
  private readonly MIN_LENGTH = 50;
  private readonly RADIUS = 10;
  private readonly FILL_STYLE = '#000000';
  private readonly SPEED = 5;

  private readonly body: Position[];
  private pre_target_angle: number;
  private angle: number;
  private ignore_times: number;

  constructor(x: number, y: number) {
    this.body = [];
    for (let i = 0; i < this.MIN_LENGTH; i++) this.body.push({ x, y });

    this.pre_target_angle = 0;
    this.angle = 0;

    this.ignore_times = 0;
  }

  private find_food(): void {
    const food = Data.getInstance().get_food;
    const food_position = food.get_position;
    const head = this.body[0];

    const pre_angle = this.angle;
    const target_angle = get_angle(head.x, head.y, food_position.x, food_position.y) * 60;
    const error = this.pre_target_angle - target_angle;
    this.pre_target_angle = target_angle;
    const diff = target_angle - pre_angle;

    if (error > 360 || error < -360) this.ignore_times = 20;

    if (this.ignore_times === 0) {
      if (diff < .1) this.angle -= 5;
      else if (diff > .1) this.angle += 5;
      else this.angle = 0;
    }
    else this.ignore_times--;
  }

  private eat_food() {
    const head = this.body[0];
    const food = Data.getInstance().get_food;
    const food_position = food.get_position;
    const food_radius = food.get_radius;

    const dis = get_distance(head.x, head.y, food_position.x, food_position.y);
    if (dis < this.RADIUS + food_radius) {
      Data.getInstance().set_explodes = new Explode(food_position.x, food_position.y, 25);
      Data.getInstance().set_food = new Food();
    }
  }

  private set_next_head(position: Position): void {
    this.body.unshift(position);
    this.body.pop();
  }

  animate(): void {
    this.find_food();
    this.eat_food();

    const head = this.body[0];
    let next_position: Position = { x: head.x + this.SPEED, y: head.y };
    next_position = rotate_vector(head.x, head.y, next_position.x, next_position.y, this.angle);
    this.set_next_head(next_position);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    for (let i = 0; i < this.body.length; i++) {
      ctx.beginPath();
      ctx.arc(this.body[i].x, this.body[i].y, this.RADIUS, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fillStyle = this.FILL_STYLE;
      ctx.fill();
    }
  }
}
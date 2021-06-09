import Particle from "./Particle.js";
import { Position } from "../Interfaces/Global.js";

export default class Explode {
  private life: boolean;
  private readonly position: Position;
  private readonly particles: Particle[];
  private readonly colors: string[];

  constructor(x: number, y: number, particle_cnt: number) {
    this.life = true;
    this.position = { x, y };
    this.particles = [];
    this.colors = ['#07B0F2', '#27CDF2', '#ADBF24', '#F2B705', '#D96941'];
    for (let i = 0; i < particle_cnt; i++) {
      const color_index = Math.round(Math.random() * this.colors.length - 1);
      const color = this.colors[color_index];
      this.particles.push(new Particle(x, y, 5, color));
    }
  }

  get get_life(): boolean { return this.life; }
  get get_particle_cnt(): number { return this.particles.length; }

  private life_check() { if (this.particles.length === 0) this.life = false; }

  animate(): void {
    this.life_check();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];

      if (!particle.get_life) {
        this.particles.splice(i, 1);
        i--;
      }

      particle.animate();
      particle.draw(ctx);
    }
  }
}
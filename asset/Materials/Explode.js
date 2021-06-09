import Particle from "./Particle.js";
export default class Explode {
    constructor(x, y, particle_cnt) {
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
    get get_life() { return this.life; }
    get get_particle_cnt() { return this.particles.length; }
    life_check() { if (this.particles.length === 0)
        this.life = false; }
    animate() {
        this.life_check();
    }
    draw(ctx) {
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

import { createNoise2D } from 'simplex-noise';
import BehaviourNames from './BehaviourNames';
import { Point } from '../util';
import Behaviour from './Behaviour';
export default class NoiseBasedMotionBehaviour extends Behaviour {
    constructor() {
        super();
        this.enabled = true;
        this.priority = 50;
        this.noiseScale = 0.01;
        this.noiseIntensity = 10;
        this.noiseSpeed = 0.1;
        this.noiseDirection = new Point(1, 1);
        this.init = (particle) => {
            if (!this.enabled)
                return;
            particle.noiseOffset = new Point(Math.random() * 1000, Math.random() * 1000);
        };
        this.apply = (particle, deltaTime) => {
            if (!this.enabled || particle.skipPositionBehaviour)
                return;
            const { noiseOffset } = particle;
            noiseOffset.x += this.noiseSpeed * deltaTime * this.noiseDirection.x;
            noiseOffset.y += this.noiseSpeed * deltaTime * this.noiseDirection.y;
            const noiseX = this.noise2D(noiseOffset.x * this.noiseScale, noiseOffset.y * this.noiseScale);
            const noiseY = this.noise2D(noiseOffset.y * this.noiseScale, noiseOffset.x * this.noiseScale);
            particle.movement.x += noiseX * this.noiseIntensity * deltaTime;
            particle.movement.y += noiseY * this.noiseIntensity * deltaTime;
        };
        this.noise2D = createNoise2D();
    }
    getName() {
        return BehaviourNames.NOISE_BASED_MOTION_BEHAVIOUR;
    }
    getProps() {
        return {
            enabled: this.enabled,
            priority: this.priority,
            noiseScale: this.noiseScale,
            noiseIntensity: this.noiseIntensity,
            noiseSpeed: this.noiseSpeed,
            noiseDirection: {
                x: this.noiseDirection.x,
                y: this.noiseDirection.y,
            },
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=NoiseBasedMotionBehaviour.js.map
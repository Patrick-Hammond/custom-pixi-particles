import Particle from '../Particle';
import { Point } from '../util';
import Behaviour from './Behaviour';
export default class NoiseBasedMotionBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    noiseScale: number;
    noiseIntensity: number;
    noiseSpeed: number;
    noiseDirection: Point;
    noise2D: any;
    constructor();
    init: (particle: Particle) => void;
    apply: (particle: Particle, deltaTime: number) => void;
    getName(): string;
    getProps(): {
        enabled: boolean;
        priority: number;
        noiseScale: number;
        noiseIntensity: number;
        noiseSpeed: number;
        noiseDirection: {
            x: number;
            y: number;
        };
        name: string;
    };
}

import Behaviour from './Behaviour';
import Particle from '../Particle';
import { Point } from '../util';
import TurbulencePool from '../util/turbulencePool';
import Model from '../Model';
export default class TurbulenceBehaviour extends Behaviour {
    priority: number;
    position: Point;
    positionVariance: Point;
    velocity: Point;
    velocityVariance: Point;
    acceleration: Point;
    accelerationVariance: Point;
    sizeStart: Point;
    sizeEnd: Point;
    startVariance: number;
    endVariance: number;
    emitPerSecond: number;
    duration: number;
    maxLifeTime: number;
    turbulencePool: TurbulencePool;
    private enabled;
    private showVortices;
    private effect;
    private turbulence;
    private vortexOrgSize;
    init: (particle: Particle, model: Model, turbulencePool: TurbulencePool) => void;
    apply: (particle: Particle) => void;
    getName(): string;
    getProps(): {
        enabled: boolean;
        priority: number;
        position: {
            x: number;
            y: number;
        };
        positionVariance: {
            x: number;
            y: number;
        };
        velocity: {
            x: number;
            y: number;
        };
        velocityVariance: {
            x: number;
            y: number;
        };
        acceleration: {
            x: number;
            y: number;
        };
        accelerationVariance: {
            x: number;
            y: number;
        };
        sizeStart: {
            x: number;
            y: number;
        };
        sizeEnd: {
            x: number;
            y: number;
        };
        startVariance: number;
        endVariance: number;
        emitPerSecond: number;
        duration: number;
        maxLifeTime: number;
        effect: number;
        name: string;
    };
}

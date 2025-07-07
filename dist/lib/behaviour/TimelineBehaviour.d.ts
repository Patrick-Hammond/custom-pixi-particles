import Particle from '../Particle';
import Behaviour from './Behaviour';
export default class TimelineBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    timeline: {
        time: number;
        properties: {
            size?: number;
            color?: {
                r: number;
                g: number;
                b: number;
                alpha: number;
            };
            rotation?: number;
        };
    }[];
    init(particle: Particle): void;
    apply(particle: Particle, deltaTime: number): void;
    interpolateProperties(particle: Particle, before: {
        size?: number;
        color?: {
            r: number;
            g: number;
            b: number;
            alpha: number;
        };
        rotation?: number;
    }, after: {
        size?: number;
        color?: {
            r: number;
            g: number;
            b: number;
            alpha: number;
        };
        rotation?: number;
    }, progress: number): void;
    setProperties(particle: Particle, properties: {
        size?: number;
        color?: {
            r: number;
            g: number;
            b: number;
            alpha: number;
        };
        rotation?: number;
    }): void;
    /**
     * Linear interpolation (lerp) function
     */
    lerp(start: number, end: number, t: number): number;
    getName(): string;
    getProps(): {
        enabled: boolean;
        priority: number;
        timeline: {
            time: number;
            properties: {
                size?: number;
                color?: {
                    r: number;
                    g: number;
                    b: number;
                    alpha: number;
                };
                rotation?: number;
            };
        }[];
        name: string;
    };
}

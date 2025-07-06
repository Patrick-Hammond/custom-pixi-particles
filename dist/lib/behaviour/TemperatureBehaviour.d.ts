import { Behaviour } from './index';
import Particle from '../Particle';
import { Color, Point } from '../util';
/**
 * TemperatureBehaviour adjusts particle velocity and color
 * based on whether they are in a hot or cold zone.
 */
export default class TemperatureBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    zones: {
        center: Point;
        radius: number;
        velocity: Point;
        color: Color;
    }[];
    /**
     * Initializes the particle. This behavior does not require
     * per-particle initialization, but it's included for extensibility.
     */
    init(particle: Particle): void;
    /**
     * Applies temperature-based adjustments to the particle's velocity and color.
     */
    apply(particle: Particle): void;
    /**
     * Checks if a particle is within a specified zone.
     */
    isInZone(particle: Particle, center: Point, radius: number): boolean;
    /**
     * Returns the name of the behavior.
     */
    getName(): string;
    /**
     * Returns properties for serialization or debugging.
     */
    getProps(): {
        enabled: boolean;
        priority: number;
        zones: {
            center: Point;
            radius: number;
            velocity: Point;
            color: Color;
        }[];
    };
}

import { Behaviour } from './index';
import Particle from '../Particle';
import { Point } from '../util';
/**
 * ForceFieldsBehaviour applies region-based forces (wind, gravity, turbulence) to particles.
 * @extends Behaviour
 */
export default class ForceFieldsBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    /**
     * List of force fields
     */
    fields: {
        position: Point;
        radius: number;
        strength: number;
        type: 'wind' | 'gravity' | 'turbulence';
        direction?: Point;
    }[];
    /**
     * Initializes the particle, but does not modify position directly.
     * @param {Particle} particle - The particle to initialize.
     */
    init: (particle: Particle) => void;
    /**
     * Applies the force field behavior to particles.
     * @param {Particle} particle - The particle to apply the behavior to.
     * @param {number} deltaTime - Time elapsed since the last frame.
     */
    apply: (particle: Particle, deltaTime: number) => void;
    /**
     * Gets the name of the behaviour.
     * @returns {string} - The name of the behaviour.
     */
    getName(): string;
    /**
     * Gets the properties of the behaviour.
     * @returns {object} - The properties of the behaviour.
     */
    getProps(): {
        enabled: boolean;
        priority: number;
        fields: {
            position: Point;
            radius: number;
            strength: number;
            type: "wind" | "gravity" | "turbulence";
            direction?: Point;
        }[];
        name: string;
    };
}

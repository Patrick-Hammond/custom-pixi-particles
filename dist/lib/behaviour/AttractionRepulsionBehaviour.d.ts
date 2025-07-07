import { Behaviour } from './index';
import Particle from '../Particle';
/**
 * AttractionRepulsionBehaviour applies attraction or repulsion forces to particles
 * without overriding other position-related behaviors.
 * @extends Behaviour
 */
export default class AttractionRepulsionBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    /**
     * List of influence points affecting particles.
     * Each point: { point: Point, strength: number, range: number }
     */
    influencePoints: never[];
    /**
     * Initializes the particle, but does not modify position directly.
     * @param {Particle} particle - The particle to initialize.
     */
    init: (particle: Particle) => void;
    /**
     * Applies attraction or repulsion forces to the particle additively.
     * @param {Particle} particle - The particle to apply the behavior to.
     * @param {number} deltaTime - Time elapsed since the last frame.
     */
    apply: (particle: Particle, deltaTime: number) => void;
    /**
     * Gets the name of the behavior.
     * @returns {string} - The name of the behavior.
     */
    getName(): string;
    /**
     * Gets the properties of the behavior.
     * @returns {object} - The properties of the behavior.
     */
    getProps(): {
        enabled: boolean;
        priority: number;
        influencePoints: never[];
        name: string;
    };
}

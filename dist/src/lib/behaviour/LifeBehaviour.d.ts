import { Behaviour } from './index';
import Particle from '../Particle';
/**
 * This class is responsible for managing the lifetimes of particles.
 * It sets the maximum lifetime of the particle and updates its progress.
 *
 * @extends Behaviour
 */
export default class LifeBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    maxLifeTime: number;
    timeVariance: number;
    /**
     * Sets the particle's life time and maximum life time.
     *
     * @param {Particle} particle - The particle to set the life time of.
     * @returns {void}
     */
    init: (particle: Particle) => void;
    /**
     * Updates the particle's life time and progress.
     *
     * @param {Particle} particle - The particle to update.
     * @param {number} deltaTime - The time since the last update.
     * @returns {void}
     */
    apply: (particle: Particle, deltaTime: number) => void;
    /**
     * Returns the name of this behaviour.
     *
     * @returns {string} - The name of the behaviour.
     */
    getName(): string;
    /**
     * Returns the properties of the behaviour.
     *
     * @returns {Object} - The properties of the behaviour.
     */
    getProps(): {
        enabled: boolean;
        priority: number;
        maxLifeTime: number;
        timeVariance: number;
        name: string;
    };
}

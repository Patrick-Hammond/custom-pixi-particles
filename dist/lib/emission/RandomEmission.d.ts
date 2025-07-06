import { AbstractEmission } from './index';
/**
 * RandomEmission class to generate random particles
 * @extends AbstractEmission
 */
export default class RandomEmission extends AbstractEmission {
    /**
     * Maximum number of particles
     */
    _maxParticles: number;
    /**
     * Emission rate
     */
    _emissionRate: number;
    /**
     * Calculates how many particles to emit
     * @param {number} deltaTime - how much time is passed
     * @param {number} particlesCount - current number of particles
     */
    howMany(deltaTime: number, particlesCount: number): number;
    /**
     * Gets the emission rate
     */
    get emissionRate(): number;
    /**
     * Sets the emission rate
     * @param {number} value - the emission rate to set
     */
    set emissionRate(value: number);
    /**
     * Gets the maximum number of particles
     */
    get maxParticles(): number;
    /**
     * Sets the maximum number of particles
     * @param {number} value - the maximum number of particles to set
     */
    set maxParticles(value: number);
    /**
     * Gets the name of the emission type
     * @returns {string} Emission type
     */
    getName: () => string;
}

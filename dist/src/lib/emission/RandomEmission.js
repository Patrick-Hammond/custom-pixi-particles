import { AbstractEmission, EmissionTypes } from './index';
import { Random } from '../util';
/**
 * RandomEmission class to generate random particles
 * @extends AbstractEmission
 */
export default class RandomEmission extends AbstractEmission {
    constructor() {
        super(...arguments);
        /**
         * Maximum number of particles
         */
        this._maxParticles = 0;
        /**
         * Emission rate
         */
        this._emissionRate = 0;
        /**
         * Gets the name of the emission type
         * @returns {string} Emission type
         */
        this.getName = () => {
            return EmissionTypes.RANDOM;
        };
    }
    /**
     * Calculates how many particles to emit
     * @param {number} deltaTime - how much time is passed
     * @param {number} particlesCount - current number of particles
     */
    howMany(deltaTime, particlesCount) {
        if (particlesCount < this.maxParticles) {
            const count = Math.round(Random.uniform(0, Math.ceil(this.emissionRate * deltaTime)));
            const total = particlesCount + count;
            return total > this._maxParticles ? this.maxParticles - particlesCount : count;
        }
        return 0;
    }
    /**
     * Gets the emission rate
     */
    get emissionRate() {
        return this._emissionRate;
    }
    /**
     * Sets the emission rate
     * @param {number} value - the emission rate to set
     */
    set emissionRate(value) {
        this._emissionRate = Math.max(0, value);
    }
    /**
     * Gets the maximum number of particles
     */
    get maxParticles() {
        return this._maxParticles;
    }
    /**
     * Sets the maximum number of particles
     * @param {number} value - the maximum number of particles to set
     */
    set maxParticles(value) {
        this._maxParticles = Math.max(0, value);
    }
}
//# sourceMappingURL=RandomEmission.js.map
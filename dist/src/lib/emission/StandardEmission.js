import { AbstractEmission, EmissionTypes } from './index';
/**
 * The StandardEmission class is an abstract class extending from AbstractEmission.
 *
 * It provides methods for calculating the number of particles emitted
 * in an interval of time and setting/getting the emission rate and maximum number of particles.
 *
 * @abstract
 */
export default class StandardEmission extends AbstractEmission {
    constructor() {
        super(...arguments);
        /**
         * The emitCounter field stores the counter for emission rate.
         * @private
         * @type {number}
         */
        this._emitCounter = 0;
        /**
         * The maxParticles field stores the maximum number of particles allowed to be emitted.
         * @private
         * @type {number}
         */
        this._maxParticles = 0;
        /**
         * The emissionRate field stores the current rate of emission.
         * @private
         * @type {number}
         */
        this._emissionRate = 0;
        /**
         * GetName() returns the type of the emission.
         * @return {EmissionTypes} - The type of the emission.
         */
        this.getName = () => {
            return EmissionTypes.UNIFORM;
        };
    }
    /**
     * Getter for the maxParticles field.
     * @return {number} - The maximum number of particles allowed to be emitted.
     */
    get maxParticles() {
        return this._maxParticles;
    }
    /**
     * Setter for the maxParticles field.
     * @param {number} value - The new maximum number of particles allowed to be emitted.
     */
    set maxParticles(value) {
        this._maxParticles = Math.max(0, value);
    }
    /**
     * Getter for the emissionRate field.
     * @return {number} - The current emission rate.
     */
    get emissionRate() {
        return this._emissionRate;
    }
    /**
     * Setter for the emissionRate field.
     * @param {number} value - The new emission rate.
     */
    set emissionRate(value) {
        this._emissionRate = Math.max(0, value);
    }
    /**
     * howMany() calculates how many particles should be emitted in the given interval of time.
     *
     * @param {number} deltaTime - The amount of time elapsed since the last emission.
     * @param {number} particlesCount - The current number of particles.
     * @return {number} - The number of particles to be emitted.
     */
    howMany(deltaTime, particlesCount) {
        const rate = 1.0 / this.emissionRate;
        let count = 0;
        if (particlesCount < this.maxParticles) {
            this._emitCounter += deltaTime;
        }
        while (particlesCount < this.maxParticles && this._emitCounter > rate) {
            count++;
            this._emitCounter -= rate;
        }
        return count;
    }
}
//# sourceMappingURL=StandardEmission.js.map
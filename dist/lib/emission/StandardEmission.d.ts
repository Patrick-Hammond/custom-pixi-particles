import { AbstractEmission } from './index';
/**
 * The StandardEmission class is an abstract class extending from AbstractEmission.
 *
 * It provides methods for calculating the number of particles emitted
 * in an interval of time and setting/getting the emission rate and maximum number of particles.
 *
 * @abstract
 */
export default class StandardEmission extends AbstractEmission {
    /**
     * The emitCounter field stores the counter for emission rate.
     * @private
     * @type {number}
     */
    _emitCounter: number;
    /**
     * The maxParticles field stores the maximum number of particles allowed to be emitted.
     * @private
     * @type {number}
     */
    _maxParticles: number;
    /**
     * Getter for the maxParticles field.
     * @return {number} - The maximum number of particles allowed to be emitted.
     */
    get maxParticles(): number;
    /**
     * Setter for the maxParticles field.
     * @param {number} value - The new maximum number of particles allowed to be emitted.
     */
    set maxParticles(value: number);
    /**
     * The emissionRate field stores the current rate of emission.
     * @private
     * @type {number}
     */
    _emissionRate: number;
    /**
     * Getter for the emissionRate field.
     * @return {number} - The current emission rate.
     */
    get emissionRate(): number;
    /**
     * Setter for the emissionRate field.
     * @param {number} value - The new emission rate.
     */
    set emissionRate(value: number);
    /**
     * howMany() calculates how many particles should be emitted in the given interval of time.
     *
     * @param {number} deltaTime - The amount of time elapsed since the last emission.
     * @param {number} particlesCount - The current number of particles.
     * @return {number} - The number of particles to be emitted.
     */
    howMany(deltaTime: number, particlesCount: number): number;
    /**
     * GetName() returns the type of the emission.
     * @return {EmissionTypes} - The type of the emission.
     */
    getName: () => string;
}

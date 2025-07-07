import { AbstractEmission } from './index';
/**
 * UniformEmission class is the implementation of the abstract class AbstractEmission.
 * It implements the method howMany and has other methods to set and get the related data.
 *
 * @class UniformEmission
 * @extends AbstractEmission
 */
export default class UniformEmission extends AbstractEmission {
    _maxParticles: number;
    _maxLife: number;
    _emitPerSecond: number;
    _frames: number;
    /**
     * Calculates the number of particles to emit.
     *
     * @param {number} deltaTime - The elapsed time between frames.
     * @param {number} particlesCount - The current number of particles on the screen.
     * @returns {number} The number of particles to emit in the current frame.
     */
    howMany(deltaTime: number, particlesCount: number): number;
    /**
     * Recalculates the emitPerSecond value based on the maxParticles and maxLife values.
     */
    refresh(): void;
    /**
     * Sets the maxLife value and calls refresh() to recalculate the emitPerSecond.
     *
     * @param {number} value - The new maxLife value.
     */
    set maxLife(value: number);
    /**
     * Sets the maxParticles value and calls refresh() to recalculate the emitPerSecond.
     *
     * @param {number} value - The new maxParticles value.
     */
    set maxParticles(value: number);
    /**
     * Returns the emitPerSecond value.
     *
     * @returns {number} The emitPerSecond value.
     */
    get emitPerSecond(): number;
    /**
     * Sets the emitPerSecond value.
     *
     * @param {number} value - The new emitPerSecond value.
     */
    set emitPerSecond(value: number);
    /**
     * Returns EmissionTypes.DEFAULT.
     *
     * @returns {string} EmissionTypes.DEFAULT.
     */
    getName: () => string;
}

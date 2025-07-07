import { AbstractEmission, EmissionTypes } from './index';
/**
 * UniformEmission class is the implementation of the abstract class AbstractEmission.
 * It implements the method howMany and has other methods to set and get the related data.
 *
 * @class UniformEmission
 * @extends AbstractEmission
 */
export default class UniformEmission extends AbstractEmission {
    constructor() {
        super(...arguments);
        this._maxParticles = 0;
        this._maxLife = 1;
        this._emitPerSecond = 0;
        this._frames = 0;
        /**
         * Returns EmissionTypes.DEFAULT.
         *
         * @returns {string} EmissionTypes.DEFAULT.
         */
        this.getName = () => {
            return EmissionTypes.DEFAULT;
        };
    }
    /**
     * Calculates the number of particles to emit.
     *
     * @param {number} deltaTime - The elapsed time between frames.
     * @param {number} particlesCount - The current number of particles on the screen.
     * @returns {number} The number of particles to emit in the current frame.
     */
    howMany(deltaTime, particlesCount) {
        const ratio = this._emitPerSecond * deltaTime;
        this._frames += ratio;
        let numberToEmit = 0;
        if (this._frames >= 1.0) {
            numberToEmit = Math.round(this._frames);
            this._frames = 0;
        }
        return numberToEmit;
    }
    /**
     * Recalculates the emitPerSecond value based on the maxParticles and maxLife values.
     */
    refresh() {
        this.emitPerSecond = this._maxParticles / this._maxLife;
    }
    /**
     * Sets the maxLife value and calls refresh() to recalculate the emitPerSecond.
     *
     * @param {number} value - The new maxLife value.
     */
    set maxLife(value) {
        this._maxLife = Math.max(value, 1);
        this.refresh();
    }
    /**
     * Sets the maxParticles value and calls refresh() to recalculate the emitPerSecond.
     *
     * @param {number} value - The new maxParticles value.
     */
    set maxParticles(value) {
        this._maxParticles = Math.max(value, 0);
        this.refresh();
    }
    /**
     * Returns the emitPerSecond value.
     *
     * @returns {number} The emitPerSecond value.
     */
    get emitPerSecond() {
        return this._emitPerSecond;
    }
    /**
     * Sets the emitPerSecond value.
     *
     * @param {number} value - The new emitPerSecond value.
     */
    set emitPerSecond(value) {
        this._emitPerSecond = Math.max(value, 0);
    }
}
//# sourceMappingURL=UniformEmission.js.map
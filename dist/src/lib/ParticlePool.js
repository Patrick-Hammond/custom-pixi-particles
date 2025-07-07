import Particle from './Particle';
/**
 * @class ParticlePool
 * A class for managing a pool of particles.
 */
class ParticlePool {
    constructor() {
        /**
         * The first element in the pool.
         */
        this.first = null;
    }
    /**
     * Removes a particle from the pool and returns it.
     *
     * @returns {Particle} The removed particle.
     */
    pop() {
        if (!this.first)
            return this.create();
        const current = this.first;
        this.first = current.next;
        current.next = null;
        return current;
    }
    /**
     * Creates a new particle.
     *
     * @returns {Particle} The newly created particle.
     */
    create() {
        return new Particle();
    }
    /**
     * Adds a particle to the pool.
     *
     * @param {Particle} particle The particle to add.
     */
    push(particle) {
        particle.next = this.first;
        this.first = particle;
    }
    /**
     * Resets the particle pool.
     */
    reset() {
        this.first = null;
        ParticlePool.global = new ParticlePool();
    }
}
/**
 * A static global instance of ParticlePool.
 */
ParticlePool.global = new ParticlePool();
export default ParticlePool;
//# sourceMappingURL=ParticlePool.js.map
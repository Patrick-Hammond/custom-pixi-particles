import Particle from './Particle';
/**
 * @class ParticlePool
 * A class for managing a pool of particles.
 */
export default class ParticlePool {
    /**
     * A static global instance of ParticlePool.
     */
    static global: ParticlePool;
    /**
     * The first element in the pool.
     */
    first: Particle | null;
    /**
     * Removes a particle from the pool and returns it.
     *
     * @returns {Particle} The removed particle.
     */
    pop(): Particle;
    /**
     * Creates a new particle.
     *
     * @returns {Particle} The newly created particle.
     */
    create(): Particle;
    /**
     * Adds a particle to the pool.
     *
     * @param {Particle} particle The particle to add.
     */
    push(particle: Particle): void;
    /**
     * Resets the particle pool.
     */
    reset(): void;
}

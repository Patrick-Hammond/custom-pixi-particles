import { Behaviour, BehaviourNames } from './index';
/**
 * This class is responsible for managing the lifetimes of particles.
 * It sets the maximum lifetime of the particle and updates its progress.
 *
 * @extends Behaviour
 */
export default class LifeBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.enabled = true;
        this.priority = 10000;
        this.maxLifeTime = 0;
        this.timeVariance = 0;
        /**
         * Sets the particle's life time and maximum life time.
         *
         * @param {Particle} particle - The particle to set the life time of.
         * @returns {void}
         */
        this.init = (particle) => {
            particle.lifeTime = 0;
            particle.lifeProgress = 0;
            particle.maxLifeTime = Math.max(this.maxLifeTime + this.varianceFrom(this.timeVariance), 0.0);
        };
        /**
         * Updates the particle's life time and progress.
         *
         * @param {Particle} particle - The particle to update.
         * @param {number} deltaTime - The time since the last update.
         * @returns {void}
         */
        this.apply = (particle, deltaTime) => {
            const { maxLifeTime } = particle;
            const lifeTime = particle.lifeTime + deltaTime;
            particle.lifeTime = lifeTime;
            if (maxLifeTime > 0) {
                particle.lifeProgress = Math.min(1.0, lifeTime / maxLifeTime);
            }
        };
    }
    /**
     * Returns the name of this behaviour.
     *
     * @returns {string} - The name of the behaviour.
     */
    getName() {
        return BehaviourNames.LIFE_BEHAVIOUR;
    }
    /**
     * Returns the properties of the behaviour.
     *
     * @returns {Object} - The properties of the behaviour.
     */
    getProps() {
        return {
            enabled: this.enabled,
            priority: this.priority,
            maxLifeTime: this.maxLifeTime,
            timeVariance: this.timeVariance,
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=LifeBehaviour.js.map
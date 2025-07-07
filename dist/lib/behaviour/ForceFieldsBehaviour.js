import { Behaviour, BehaviourNames } from './index';
/**
 * ForceFieldsBehaviour applies region-based forces (wind, gravity, turbulence) to particles.
 * @extends Behaviour
 */
export default class ForceFieldsBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.enabled = true;
        this.priority = 300; // Executes after initial movement behaviors
        /**
         * List of force fields
         */
        this.fields = [];
        /**
         * Initializes the particle, but does not modify position directly.
         * @param {Particle} particle - The particle to initialize.
         */
        this.init = (particle) => {
            // Initialization logic if needed.
        };
        /**
         * Applies the force field behavior to particles.
         * @param {Particle} particle - The particle to apply the behavior to.
         * @param {number} deltaTime - Time elapsed since the last frame.
         */
        this.apply = (particle, deltaTime) => {
            if (!this.enabled || particle.skipPositionBehaviour)
                return;
            this.fields.forEach((field) => {
                const distance = Math.sqrt(Math.pow((particle.x - field.position.x), 2) + Math.pow((particle.y - field.position.y), 2));
                // Check if the particle is within the field's radius
                if (distance <= field.radius) {
                    const influence = (field.radius - distance) / field.radius; // Influence factor (closer = stronger)
                    switch (field.type) {
                        case 'wind':
                            if (field.direction) {
                                particle.movement.x += field.direction.x * field.strength * influence * deltaTime;
                                particle.movement.y += field.direction.y * field.strength * influence * deltaTime;
                            }
                            break;
                        case 'gravity':
                            const dx = field.position.x - particle.x;
                            const dy = field.position.y - particle.y;
                            const angle = Math.atan2(dy, dx);
                            particle.movement.x += Math.cos(angle) * field.strength * influence * deltaTime;
                            particle.movement.y += Math.sin(angle) * field.strength * influence * deltaTime;
                            break;
                        case 'turbulence':
                            const randomForceX = (Math.random() - 0.5) * 2 * field.strength * influence;
                            const randomForceY = (Math.random() - 0.5) * 2 * field.strength * influence;
                            particle.movement.x += randomForceX * deltaTime;
                            particle.movement.y += randomForceY * deltaTime;
                            break;
                    }
                }
            });
        };
    }
    /**
     * Gets the name of the behaviour.
     * @returns {string} - The name of the behaviour.
     */
    getName() {
        return BehaviourNames.FORCE_FIELDS_BEHAVIOUR;
    }
    /**
     * Gets the properties of the behaviour.
     * @returns {object} - The properties of the behaviour.
     */
    getProps() {
        return {
            enabled: this.enabled,
            priority: this.priority,
            fields: this.fields,
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=ForceFieldsBehaviour.js.map
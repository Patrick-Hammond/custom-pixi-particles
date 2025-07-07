import { Behaviour } from './index';
import behaviourNames from './BehaviourNames';
/**
 * TemperatureBehaviour adjusts particle velocity and color
 * based on whether they are in a hot or cold zone.
 */
export default class TemperatureBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.enabled = true;
        this.priority = 150;
        this.zones = [];
    }
    /**
     * Initializes the particle. This behavior does not require
     * per-particle initialization, but it's included for extensibility.
     */
    init(particle) {
        // Optionally, initialize particle-specific data here
    }
    /**
     * Applies temperature-based adjustments to the particle's velocity and color.
     */
    apply(particle) {
        if (!this.enabled || !this.zones || !this.zones.length)
            return;
        // Check if the particle is in any hot zone
        for (const zone of this.zones) {
            if (this.isInZone(particle, zone.center, zone.radius)) {
                particle.velocity.x *= zone.velocity.x;
                particle.velocity.y *= zone.velocity.y;
                particle.color.r = zone.color.r;
                particle.color.g = zone.color.g;
                particle.color.b = zone.color.b;
                break;
            }
        }
    }
    /**
     * Checks if a particle is within a specified zone.
     */
    isInZone(particle, center, radius) {
        const dx = particle.movement.x - center.x;
        const dy = particle.movement.y - center.y;
        return Math.sqrt(dx * dx + dy * dy) < radius;
    }
    /**
     * Returns the name of the behavior.
     */
    getName() {
        return behaviourNames.TEMPERATURE_BEHAVIOUR;
    }
    /**
     * Returns properties for serialization or debugging.
     */
    getProps() {
        return {
            enabled: this.enabled,
            priority: this.priority,
            zones: this.zones,
        };
    }
}
//# sourceMappingURL=TemperatureBehaviour.js.map
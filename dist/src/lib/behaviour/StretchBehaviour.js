import { Behaviour, BehaviourNames } from './index';
export default class StretchBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.enabled = true;
        this.priority = 200;
        this.baseScale = 1; // Base scale for Y-axis
        this.stretchFactor = 0.1; // Factor to scale X-axis based on speed
        this.minStretch = 1; // Minimum X scale
        this.maxStretch = 10; // Maximum X scale
        this.init = (particle) => {
            if (!this.enabled)
                return;
            // Initialize scale and rotation
            particle.size.x = this.baseScale;
            particle.size.y = this.baseScale;
            particle.rotation = 0;
        };
        this.apply = (particle, deltaTime) => {
            if (!this.enabled)
                return;
            // Calculate effective velocity by combining movement and velocity changes
            const combinedX = particle.velocity.x + (particle.movement.x - particle.x) / deltaTime;
            const combinedY = particle.velocity.y + (particle.movement.y - particle.y) / deltaTime;
            const speed = Math.sqrt(Math.pow(combinedX, 2) + Math.pow(combinedY, 2));
            // Stretch factor based on speed
            const stretch = Math.min(this.maxStretch, Math.max(this.minStretch, this.baseScale + speed * this.stretchFactor));
            // Apply scaling
            particle.size.x = stretch; // Stretch along movement direction
            particle.size.y = this.baseScale; // Maintain constant height
            // Update rotation to align with movement direction
            const angle = Math.atan2(combinedY, combinedX);
            particle.rotation = angle;
        };
    }
    /**
     * Gets the name of the behaviour.
     * @return {string} The name of the behaviour.
     */
    getName() {
        return BehaviourNames.STRETCH_BEHAVIOUR;
    }
    /**
     * Retrieves the properties of the behaviour.
     * @returns {object} The properties of the behaviour.
     */
    getProps() {
        return {
            enabled: this.enabled,
            priority: this.priority,
            baseScale: this.baseScale,
            stretchFactor: this.stretchFactor,
            minStretch: this.minStretch,
            maxStretch: this.maxStretch,
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=StretchBehaviour.js.map
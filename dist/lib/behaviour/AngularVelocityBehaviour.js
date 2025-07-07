import Behaviour from './Behaviour';
import math from '../util/maths';
import BehaviourNames from './BehaviourNames';
export default class AngularVelocityBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.priority = 100;
        this.enabled = false;
        this.degrees = 0;
        this.degreesVariance = 0;
        this.maxRadius = 0;
        this.maxRadiusVariance = 0;
        this.minRadius = 0;
        this.minRadiusVariance = 0;
        this.oscillate = false; // Oscillate angular velocity
        this.oscillationSpeed = 1; // Speed of oscillation
        this.oscillationAmplitude = 10; // Amplitude of oscillation in degrees
        this.linearRadiusReduction = true; // Linear or exponential radius reduction
        this.dynamicRadius = false; // Allow dynamic radius changes during lifetime
        /**
         * Initializes particle properties of the behaviour
         *
         * @param {Particle} particle - The current particle
         * @memberof AngularVelocityBehaviour
         */
        this.init = (particle) => {
            if (!this.enabled)
                return;
            particle.radiansPerSecond = math.degreesToRadians(this.degrees + this.varianceFrom(this.degreesVariance));
            const radiusStart = this.maxRadius + this.varianceFrom(this.maxRadiusVariance);
            const radiusEnd = this.minRadius + this.varianceFrom(this.minRadiusVariance);
            particle.radiusStart = radiusStart;
            particle.radiusEnd = radiusEnd;
            particle.velocityAngle = 0;
            particle.x = 0;
            particle.y = 0;
            particle.radius = radiusStart;
            particle.angle = 0;
        };
        /**
         * Applies the behaviour to the particle
         *
         * @param {Particle} particle - The current particle
         * @param {number} deltaTime - Time elapsed since the last frame
         * @memberof AngularVelocityBehaviour
         */
        this.apply = (particle, deltaTime) => {
            if (!this.enabled)
                return;
            if (particle.skipAngularVelocityBehaviour)
                return;
            const { radiusStart, radiusEnd, radiansPerSecond, lifeProgress, velocityAngle } = particle;
            let angleVelocity = radiansPerSecond;
            // Oscillation logic
            if (this.oscillate) {
                const oscillationFactor = Math.sin(particle.lifeTime * this.oscillationSpeed) * this.oscillationAmplitude;
                angleVelocity += math.degreesToRadians(oscillationFactor);
            }
            // Update angle
            const newVelocityAngle = velocityAngle + angleVelocity * deltaTime;
            // Radius calculation
            let newRadius;
            if (this.linearRadiusReduction) {
                newRadius = radiusStart + (radiusEnd - radiusStart) * lifeProgress;
            }
            else {
                // Exponential radius reduction
                const progressFactor = Math.pow(lifeProgress, 2);
                newRadius = radiusStart + (radiusEnd - radiusStart) * progressFactor;
            }
            if (this.dynamicRadius) {
                newRadius += Math.sin(particle.lifeTime * 2 * Math.PI) * 5; // Example dynamic change
            }
            const movementX = Math.cos(newVelocityAngle) * newRadius;
            const movementY = Math.sin(newVelocityAngle) * newRadius;
            particle.velocityAngle = newVelocityAngle;
            particle.radius = newRadius;
            particle.movement.x = movementX;
            particle.movement.y = movementY;
            particle.x = movementX;
            particle.y = movementY;
        };
    }
    /**
     * Returns the name of the behaviour
     *
     * @returns {string} Name of the behaviour
     * @memberof AngularVelocityBehaviour
     */
    getName() {
        return BehaviourNames.ANGULAR_BEHAVIOUR;
    }
    /**
     * Returns the properties of the behaviour
     *
     * @returns {object} Properties of the behaviour
     * @memberof AngularVelocityBehaviour
     */
    getProps() {
        return {
            enabled: this.enabled,
            degrees: this.degrees,
            degreesVariance: this.degreesVariance,
            maxRadius: this.maxRadius,
            maxRadiusVariance: this.maxRadiusVariance,
            minRadius: this.minRadius,
            minRadiusVariance: this.minRadiusVariance,
            oscillate: this.oscillate,
            oscillationSpeed: this.oscillationSpeed,
            oscillationAmplitude: this.oscillationAmplitude,
            linearRadiusReduction: this.linearRadiusReduction,
            dynamicRadius: this.dynamicRadius,
            priority: this.priority,
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=AngularVelocityBehaviour.js.map
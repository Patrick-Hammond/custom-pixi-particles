import { Behaviour, BehaviourNames } from './index';
/**
 * RotationBehaviour is a Behaviour class used to control the rotation of particles.
 * @extends Behaviour
 */
export default class RotationBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.enabled = false;
        this.priority = 0;
        this.rotation = 0; // Base rotation speed
        this.variance = 0; // Variance in rotation speed
        this.oscillate = false; // Enable oscillation
        this.oscillationSpeed = 1; // Speed of oscillation
        this.oscillationAmplitude = 0; // Amplitude of oscillation
        this.useNoise = false; // Use Perlin noise for rotation
        this.noiseScale = 0.1; // Scale of Perlin noise
        this.acceleration = 0; // Rotation acceleration (positive or negative)
        this.clockwise = true; // Clockwise or counterclockwise rotation
        /**
         * Initialise the Behaviour for a particle
         * @param {Particle} particle - The particle to be initialised
         */
        this.init = (particle) => {
            if (!this.enabled)
                return;
            // Set base rotation delta with variance
            const baseRotation = this.rotation + this.varianceFrom(this.variance);
            particle.rotationDelta = this.clockwise ? baseRotation : -baseRotation;
            // Initialize acceleration if enabled
            particle.rotationAcceleration = this.acceleration;
        };
        /**
         * Applies the Behaviour to a particle
         * @param {Particle} particle - The particle to apply the Behaviour to
         * @param {number} deltaTime - The delta time of the runtime
         */
        this.apply = (particle, deltaTime) => {
            if (!this.enabled)
                return;
            if (particle.skipRotationBehaviour)
                return;
            let deltaRotation = particle.rotationDelta;
            // Apply oscillation effect
            if (this.oscillate) {
                const oscillation = Math.sin(particle.lifeTime * this.oscillationSpeed) * this.oscillationAmplitude;
                deltaRotation += oscillation;
            }
            // Apply noise-based rotation
            if (this.useNoise) {
                const noiseValue = this.pseudoRandomNoise(particle.lifeTime * this.noiseScale);
                deltaRotation += noiseValue * 2 - 1; // Map noise from [0,1] to [-1,1]
            }
            // Apply rotation acceleration
            if (particle.rotationAcceleration) {
                particle.rotationDelta += particle.rotationAcceleration * deltaTime;
                deltaRotation = particle.rotationDelta;
            }
            // Update particle rotation
            particle.rotation += deltaRotation * deltaTime;
        };
    }
    /**
     * Pseudo-random noise generator for smooth transitions
     * @param {number} seed - Input seed for generating noise
     * @returns {number} - Noise value between 0 and 1
     */
    pseudoRandomNoise(seed) {
        const x = Math.sin(seed * 10000) * 10000;
        return x - Math.floor(x);
    }
    /**
     * Gets the name of the Behaviour
     * @returns {string} - The name of the Behaviour
     */
    getName() {
        return BehaviourNames.ROTATION_BEHAVIOUR;
    }
    /**
     * Gets the properties of the Behaviour
     * @returns {object} - The properties of the Behaviour
     */
    getProps() {
        return {
            enabled: this.enabled,
            priority: this.priority,
            rotation: this.rotation,
            variance: this.variance,
            oscillate: this.oscillate,
            oscillationSpeed: this.oscillationSpeed,
            oscillationAmplitude: this.oscillationAmplitude,
            useNoise: this.useNoise,
            noiseScale: this.noiseScale,
            acceleration: this.acceleration,
            clockwise: this.clockwise,
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=RotationBehaviour.js.map
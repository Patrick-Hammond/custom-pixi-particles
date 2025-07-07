import Behaviour from './Behaviour';
import Particle from '../Particle';
export default class EmitDirectionBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    angle: number;
    variance: number;
    oscillate: boolean;
    oscillationSpeed: number;
    oscillationAmplitude: number;
    useNoise: boolean;
    noiseScale: number;
    velocityScaling: boolean;
    /**
     * Initializes the particle's direction.
     * @param {Particle} particle - The particle that is being initialized.
     * @memberof EmitDirectionBehaviour
     */
    init: (particle: Particle) => void;
    /**
     * Applies the behavior to the particle.
     * @param {Particle} particle - The particle to which the behavior is being applied.
     * @param {number} deltaTime - The amount of time since the behavior was last applied.
     * @memberof EmitDirectionBehaviour
     */
    apply: (particle: Particle, deltaTime: number) => void;
    pseudoRandomNoise(seed: number): number;
    /**
     * Gets the name of the behavior.
     * @returns {BehaviourNames.EMIT_DIRECTION}
     * @memberof EmitDirectionBehaviour
     */
    getName(): string;
    /**
     * Gets the properties of the behavior.
     * @returns {object} - The properties of the behavior.
     * @memberof EmitDirectionBehaviour
     */
    getProps(): {
        enabled: boolean;
        priority: number;
        angle: number;
        variance: number;
        oscillate: boolean;
        oscillationSpeed: number;
        oscillationAmplitude: number;
        useNoise: boolean;
        noiseScale: number;
        velocityScaling: boolean;
        name: string;
    };
}

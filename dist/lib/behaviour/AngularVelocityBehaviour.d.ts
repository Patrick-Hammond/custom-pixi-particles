import Behaviour from './Behaviour';
import Particle from '../Particle';
export default class AngularVelocityBehaviour extends Behaviour {
    protected priority: number;
    private enabled;
    private degrees;
    private degreesVariance;
    private maxRadius;
    private maxRadiusVariance;
    private minRadius;
    private minRadiusVariance;
    private oscillate;
    private oscillationSpeed;
    private oscillationAmplitude;
    private linearRadiusReduction;
    private dynamicRadius;
    /**
     * Initializes particle properties of the behaviour
     *
     * @param {Particle} particle - The current particle
     * @memberof AngularVelocityBehaviour
     */
    init: (particle: Particle) => void;
    /**
     * Applies the behaviour to the particle
     *
     * @param {Particle} particle - The current particle
     * @param {number} deltaTime - Time elapsed since the last frame
     * @memberof AngularVelocityBehaviour
     */
    apply: (particle: Particle, deltaTime: number) => void;
    /**
     * Returns the name of the behaviour
     *
     * @returns {string} Name of the behaviour
     * @memberof AngularVelocityBehaviour
     */
    getName(): string;
    /**
     * Returns the properties of the behaviour
     *
     * @returns {object} Properties of the behaviour
     * @memberof AngularVelocityBehaviour
     */
    getProps(): {
        enabled: boolean;
        degrees: number;
        degreesVariance: number;
        maxRadius: number;
        maxRadiusVariance: number;
        minRadius: number;
        minRadiusVariance: number;
        oscillate: boolean;
        oscillationSpeed: number;
        oscillationAmplitude: number;
        linearRadiusReduction: boolean;
        dynamicRadius: boolean;
        priority: number;
        name: string;
    };
}

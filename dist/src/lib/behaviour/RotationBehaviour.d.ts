import { Behaviour } from './index';
import Particle from '../Particle';
/**
 * RotationBehaviour is a Behaviour class used to control the rotation of particles.
 * @extends Behaviour
 */
export default class RotationBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    rotation: number;
    variance: number;
    oscillate: boolean;
    oscillationSpeed: number;
    oscillationAmplitude: number;
    useNoise: boolean;
    noiseScale: number;
    acceleration: number;
    clockwise: boolean;
    /**
     * Initialise the Behaviour for a particle
     * @param {Particle} particle - The particle to be initialised
     */
    init: (particle: Particle) => void;
    /**
     * Applies the Behaviour to a particle
     * @param {Particle} particle - The particle to apply the Behaviour to
     * @param {number} deltaTime - The delta time of the runtime
     */
    apply: (particle: Particle, deltaTime: number) => void;
    /**
     * Pseudo-random noise generator for smooth transitions
     * @param {number} seed - Input seed for generating noise
     * @returns {number} - Noise value between 0 and 1
     */
    pseudoRandomNoise(seed: number): number;
    /**
     * Gets the name of the Behaviour
     * @returns {string} - The name of the Behaviour
     */
    getName(): string;
    /**
     * Gets the properties of the Behaviour
     * @returns {object} - The properties of the Behaviour
     */
    getProps(): {
        enabled: boolean;
        priority: number;
        rotation: number;
        variance: number;
        oscillate: boolean;
        oscillationSpeed: number;
        oscillationAmplitude: number;
        useNoise: boolean;
        noiseScale: number;
        acceleration: number;
        clockwise: boolean;
        name: string;
    };
}

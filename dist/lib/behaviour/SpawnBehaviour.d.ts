import { Behaviour } from './index';
import Particle from '../Particle';
export default class SpawnBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    overOne: boolean;
    trailProgress: number;
    trailingEnabled: boolean;
    spawnAlongTrail: boolean;
    trailSpeed: number;
    trailRepeat: boolean;
    trailStart: number;
    currentProgress: number;
    customPoints: any[];
    lastWordSettings: any;
    /**
     * Initialize particles for each custom point.
     * @param {Particle} particle - The particle to initialize.
     */
    init: (particle: Particle) => void;
    apply: () => void;
    /**
     * Calculate trail positions along the range from trailStart to currentProgress.
     * @param {Object} point - The custom point configuration.
     * @returns {Point[]} List of positions along the trail.
     */
    calculateTrailRangePositions: (point: any) => {
        positions: {
            x: any;
            y: any;
            z: any;
        }[];
        probabilities: number[];
    };
    /**
     * Spawn particle at the specified point configuration.
     * @param {Particle} particle - The particle to be initialized.
     * @param {Object} point - The custom point configuration.
     */
    spawnParticleAtPoint: (particle: Particle, point: any) => void;
    /**
     * Calculate canvas context for rendering text-based particles.
     * @param {Object} point - The custom point configuration.
     */
    calculateCtx: (point: any) => void;
    calculateTrailPosition: (point: any, overrideProgress?: number) => {
        x: any;
        y: any;
        z: any;
    };
    /**
     * Update trail progress once per frame.
     * @param {number} deltaTime - Time since the last update
     */
    updateTrailProgress: (deltaTime: number) => void;
    weightedRandomIndex: (probabilities: any) => any;
    /**
     * Update method to be called once per frame.
     * @param {number} deltaTime - Time since the last frame
     */
    update: (deltaTime: number) => void;
    /**
     * Adds a random variance to the given value
     * @param {number} value - The value to calculate
     * @param {number} variance - The random variance to add
     * @returns {number} The calculated value
     */
    calculate: (value: number, variance: number) => number;
    /**
     * Gets the name of the behaviour
     * @return {string} The name of the behaviour
     */
    getName(): string;
    /**
     * Retrieves the properties of the custom points.
     * @returns {Object[]} The array of custom points and their properties.
     */
    getProps(): {
        enabled: boolean;
        priority: number;
        trailingEnabled: boolean;
        spawnAlongTrail: boolean;
        trailSpeed: number;
        trailRepeat: boolean;
        trailStart: number;
        customPoints: any[];
        name: string;
    };
}

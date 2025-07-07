import { Behaviour } from './index';
import Particle from '../Particle';
import { Point } from '../util';
/**
 * MoveToPointBehaviour makes particles move towards a specified target point
 * when active.
 * @extends Behaviour
 */
export default class MoveToPointBehaviour extends Behaviour {
    enabled: boolean;
    /**
     * When true, particles will move towards the targetPoint.
     */
    active: boolean;
    /**
     * The target (x, y) coordinates for the particles.
     */
    targetPoint: Point;
    /**
     * The speed at which particles move towards the target point (units per second).
     */
    speed: number;
    /**
     * Priority determines execution order. A lower number means it runs later.
     * This should run after default position behaviours to override the particle's position.
     * PositionBehaviour is 100, EmitDirection is 0. Set to -10 to run after them.
     */
    priority: number;
    constructor();
    /**
     * Initializes particle properties for the behaviour.
     * This behaviour doesn't require specific per-particle initialization at creation time,
     * as its effect is mostly global and trigger-based.
     * @param {Particle} particle - The particle to initialize.
     */
    init: (particle: Particle) => void;
    /**
     * Applies the behaviour to the particle. If active, moves the particle
     * towards the targetPoint.
     * @param {Particle} particle - The particle to apply the behaviour to.
     * @param {number} deltaTime - Time elapsed since the last frame.
     */
    apply: (particle: Particle, deltaTime: number) => void;
    /**
     * Gets the name of the behaviour.
     * @returns {string} - The name of the behaviour.
     */
    getName(): string;
    /**
     * Gets the properties of the behaviour for configuration.
     * @returns {object} - The properties of the behaviour.
     */
    getProps(): {
        enabled: boolean;
        active: boolean;
        targetPoint: {
            x: number;
            y: number;
        };
        speed: number;
        priority: number;
        name: string;
    };
}

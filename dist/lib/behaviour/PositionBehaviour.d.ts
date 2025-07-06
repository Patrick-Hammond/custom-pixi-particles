import { Point } from '../util';
import { Behaviour } from './index';
import Particle from '../Particle';
import Model from '../Model';
import MinMax from '../util/MinMax';
import ThereBack from '../util/ThereBack';
export default class PositionBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    warp: boolean;
    warpSpeed: number;
    warpBaseSpeed: number;
    sinX: boolean;
    sinY: boolean;
    sinXVal: Point;
    sinYVal: Point;
    sinXValVariance: Point;
    sinYValVariance: Point;
    positionVariance: Point;
    velocity: Point;
    velocityVariance: Point;
    acceleration: Point;
    accelerationVariance: Point;
    cameraZConverter: number;
    warpFov: number;
    warpStretch: number;
    warpDistanceScaleConverter: number;
    warpDistanceToCenter: boolean;
    fromAtoB: boolean;
    fromAtoBTwoWays: boolean;
    pointA: Point;
    pointB: Point;
    thereDuration: MinMax;
    thereAmplitude: MinMax;
    backDuration: MinMax;
    backAmplitude: MinMax;
    there: ThereBack;
    back: ThereBack;
    /**
     * Function that initializes a particle
     * @param {Particle} particle - The particle to be initialized
     * @param {Model} model - The model of the particle
     */
    init: (particle: Particle, model: Model) => void;
    /**
     * Restarts the warp of a particle
     * @param {Particle} particle - The particle to restart the warp on
     * @param {boolean} initial - True if this is the initial warp, false if it is a subsequent one
     * @param {Model} model - The model containing the camera Z property
     */
    restartWarp: (particle: Particle, initial: boolean, model: Model) => void;
    /**
     * Adds a random variance to the given value
     * @param {number} value - The value to calculate
     * @param {number} variance - The random variance to add
     * @returns {number} The calculated value
     */
    calculate: (value: number, variance: number) => number;
    /**
     * Applies the particle's velocity and acceleration to move it and calculate its size, rotation, and position.
     * @param {Particle} particle - The particle to be moved
     * @param {number} deltaTime - The time delta for the movement calculation
     * @param {Model} model - The model containing information about the particle's movement
     */
    apply: (particle: Particle, deltaTime: number, model: Model) => void;
    /**
     * Gets the name of the behaviour
     * @return {BehaviourNames} The name of the behaviour
     */
    getName(): string;
    _lerp(start: number, end: number, t: number): number;
    _easeBackInOut(t: number, c1?: number, c2?: number): number;
    _easeBackIn(t: number, c1?: number): number;
    _easeBackOut(t: number, c1?: number): number;
    _easePower1In(t: number): number;
    _easePower1Out(t: number): number;
    _easePower1InOut(t: number): number;
    _easeBounceIn(t: number): number;
    _easeBounceOut(t: number): number;
    _easeBounceInOut(t: number): number;
    _easeElasticIn(t: number): number;
    _easeElasticOut(t: number): number;
    _easeElasticInOut(t: number): number;
    _easeSteps(t: number, numSteps?: number): number;
    /**
     * @description Retrieves the properties of the object.
     * @returns {Object} The properties of the object.
     */
    getProps(): {
        enabled: boolean;
        priority: number;
        fromAtoB: boolean;
        fromAtoBTwoWays: boolean;
        there: {
            x: string;
            y: string;
            ease: string;
        };
        back: {
            x: string;
            y: string;
            ease: string;
        };
        pointA: {
            x: number;
            y: number;
        };
        pointB: {
            x: number;
            y: number;
        };
        thereDuration: {
            min: number;
            max: number;
        };
        thereAmplitude: {
            min: number;
            max: number;
        };
        backDuration: {
            min: number;
            max: number;
        };
        backAmplitude: {
            min: number;
            max: number;
        };
        warp: boolean;
        sinX: boolean;
        sinY: boolean;
        sinXVal: Point;
        sinYVal: Point;
        sinXValVariance: Point;
        sinYValVariance: Point;
        positionVariance: {
            x: number;
            y: number;
        };
        velocity: {
            x: number;
            y: number;
        };
        velocityVariance: {
            x: number;
            y: number;
        };
        acceleration: {
            x: number;
            y: number;
        };
        accelerationVariance: {
            x: number;
            y: number;
        };
        warpSpeed: number;
        warpBaseSpeed: number;
        cameraZConverter: number;
        warpFov: number;
        warpStretch: number;
        warpDistanceScaleConverter: number;
        warpDistanceToCenter: boolean;
        name: string;
    };
}

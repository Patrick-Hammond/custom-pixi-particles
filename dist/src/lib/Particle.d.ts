import { Sprite } from 'pixi.js';
import { Color, Point } from './util';
import ThereBack from './util/ThereBack';
/**
 * Represents a particle object used in particle system simulations
 */
export default class Particle {
    static _UID: {
        value: number;
    };
    next: Particle | null;
    prev: Particle | null;
    /**
     * Stores the unique ID of the particle
     */
    uid: number;
    /**
     * Stores the movement of the particle
     */
    movement: Point;
    /**
     * Stores the acceleration of the particle
     */
    acceleration: Point;
    /**
     * Stores the velocity of the particle
     */
    velocity: Point;
    /**
     * Stores the size of the particle
     */
    size: Point;
    /**
     * Stores the starting size of the particle
     */
    sizeStart: Point;
    /**
     * Stores the starting warp size of the particle
     */
    warpSizeStart: Point;
    /**
     * Stores the ending size of the particle
     */
    sizeEnd: Point;
    /**
     * Stores the x value of the particle for sin wave
     */
    sinXVal: Point;
    /**
     * Stores the y value of the particle for sin wave
     */
    sinYVal: Point;
    /**
     * Stores the color of the particle
     */
    color: Color;
    /**
     * Stores the starting color of the particle
     */
    colorStart: Color;
    /**
     * Stores the ending color of the particle
     */
    colorEnd: Color;
    superColorAlphaEnd: number;
    /**
     * Stores the maximum life time of the particle
     */
    maxLifeTime: number;
    /**
     * Stores the current life time of the particle
     */
    lifeTime: number;
    /**
     * Stores the current life progress of the particle
     */
    lifeProgress: number;
    /**
     * Stores the x position of the particle
     */
    x: number;
    /**
     * Stores the y position of the particle
     */
    y: number;
    /**
     * Stores the z position of the particle
     */
    z: number;
    /**
     * Stores the velocity angle of the particle
     */
    velocityAngle: number;
    /**
     * Stores the radians per second of the particle
     */
    radiansPerSecond: number;
    /**
     * Stores the radius of the particle
     */
    radius: number;
    radiusX: number;
    radiusY: number;
    /**
     * Stores the starting radius of the particle
     */
    radiusStart: number;
    /**
     * Stores the ending radius of the particle
     */
    radiusEnd: number;
    /**
     * Stores the cosine of the direction of the particle
     */
    directionCos: number;
    /**
     * Stores the sine of the direction of the particle
     */
    directionSin: number;
    /**
     * Stores the rotation of the particle
     */
    rotation: number;
    /**
     * Stores the rotation delta of the particle
     */
    rotationDelta: number;
    /**
     * Stores the angle of the particle
     */
    angle: number;
    /**
     * Stores the sprite of the particle
     */
    sprite: Sprite;
    /**
     * Stores whether the vortices are shown
     */
    showVortices: boolean;
    /**
     * Stores whether the turbulence is enabled
     */
    turbulence: boolean;
    /**
     * Stores the finishing texture of the particle
     */
    finishingTexture: number;
    /**
     * Stores the camera z position of the particle
     */
    cameraZ: number;
    /**
     * Stores the camera z position converter of the particle
     */
    cameraZConverter: number;
    /**
     * Stores the warp speed of the particle
     */
    warpSpeed: number;
    /**
     * Stores the warp base speed of the particle
     */
    warpBaseSpeed: number;
    /**
     * Stores the warp field of view of the particle
     */
    warpFov: number;
    /**
     * Stores the warp stretch of the particle
     */
    warpStretch: number;
    skipPositionBehaviour: boolean;
    skipAngularVelocityBehaviour: boolean;
    skipColorBehaviour: boolean;
    skipEmitDirectionBehaviour: boolean;
    skipRotationBehaviour: boolean;
    skipSizeBehaviour: boolean;
    skipAttractionRepulsionBehaviour: boolean;
    /**
     * Stores the warp distance scale converter of the particle
     */
    warpDistanceScaleConverter: number;
    sizeDifference: {
        x: number;
        y: number;
    };
    fromAtoB: boolean;
    fromAtoBTwoWays: boolean;
    pointA: Point;
    pointB: Point;
    there: ThereBack;
    back: ThereBack;
    xStart: number;
    yStart: number;
    xTarget: number;
    yTarget: number;
    thereDuration: number;
    backDuration: number;
    progress: number;
    time: number;
    thereAmplitude: number;
    backAmplitude: number;
    direction: number;
    noiseOffset: Point;
    timeline: any[];
    initialDirectionCos: number;
    initialDirectionSin: number;
    velocityScale: number;
    rotationAcceleration: number;
    /**
     * Constructs a particle object
     */
    constructor();
    /**
     * Resets the particle object
     */
    reset(): void;
    /**
     * Checks if the particle is almost dead
     *
     * @return {boolean} True if the particle is almost dead, otherwise false
     */
    isAlmostDead(): boolean;
    /**
     * Checks if the particle is dead
     *
     * @return {boolean} True if the particle is dead, otherwise false
     */
    isDead(): boolean;
    /**
     * Hides the particle
     */
    hide(): void;
}

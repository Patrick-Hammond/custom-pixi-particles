import Duration from './Duration';
import { EmitterBehaviours } from '../behaviour';
import eventemitter3 from 'eventemitter3';
import { EmitterParser } from '../parser';
import List from '../util/List';
import Particle from '../Particle';
import { BLEND_MODES } from 'pixi.js';
import Model from '../Model';
import TurbulencePool from '../util/turbulencePool';
export default class Emitter extends eventemitter3 {
    static STOP: string;
    static RESET: string;
    static CREATE: string;
    static UPDATE: string;
    static REMOVE: string;
    static FINISHING: string;
    static COMPLETE: string;
    list: List;
    duration: Duration;
    animatedSprite: {
        loop: boolean;
        frameRate: number;
        randomFrameStart: number;
    };
    alpha: number;
    anchor: {
        x: number;
        y: number;
    };
    blendMode: BLEND_MODES;
    behaviours: EmitterBehaviours;
    emitController: any;
    turbulencePool: TurbulencePool;
    private _play;
    private _model;
    constructor(model: Model);
    /**
     * Updates the emitter, emits particles and updates the particles.
     * Triggers the COMPLETE event when the duration is elapsed and the list is empty.
     * @param {number} deltaTime - Time elapsed since the last update
     */
    update(deltaTime: number): void;
    /**
     * Emits particles if the duration is not elapsed.
     * @param {number} deltaTime - Time elapsed since the last update
     */
    emitParticles(deltaTime: number): void;
    /**
     * Creates the particles to be emitted.
     * Triggers the CREATE event when a particle is created.
     * @param {number} deltaTime - Time elapsed since the last update
     */
    createParticles(deltaTime: number): void;
    /**
     * Updates the list of particles
     * @param {number} deltaTime - The amount of time that has passed since the last update
     */
    updateParticles(deltaTime: number): void;
    /**
     * Updates a single particle
     * @param {Particle} particle - The particle to update
     * @param {number} deltaTime - The amount of time that has passed since the last update
     */
    updateParticle(particle: Particle, deltaTime: number): void;
    /**
     * Removes a particle from the list and reset it
     * @param {Particle} particle - The particle to remove
     */
    removeParticle(particle: Particle): void;
    /**
     * Gets a parser to parse the emitter and it's particles
     * @returns {EmitterParser} - The parser for this emitter
     */
    getParser(): EmitterParser;
    /**
     * Creates props for a behaviour
     * @param {string} name - The name of the behaviour
     * @returns {Object} - The props for the behaviour
     */
    createBehaviourProps(name: string): any;
    /**
     * Starts the emitter playing
     */
    play(): void;
    /**
     * Resets the emitter and starts playing
     */
    resetAndPlay(): void;
    /**
     * Resets the emitter without removing the particles and starts playing
     */
    resetWithoutRemovingAndPlay(): void;
    /**
     * Resets the emitter and removes all the particles
     */
    reset(): void;
    /**
     * Resets the emitter without removing the particles
     */
    resetWithoutRemoving(): void;
    /**
     * Stops the emitter and removes all the particles
     */
    stop(): void;
    /**
     * Stops the emitter without killing the particles
     */
    stopWithoutKilling(): void;
    /**
     * Removes all the particles from the list
     */
    removeParticles(): void;
    pause(): void;
    resume(): void;
    destroy(): void;
}

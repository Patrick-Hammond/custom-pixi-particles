import { Emitter } from '../emitter';
import { ICustomPixiParticlesSettings } from '../customPixiParticlesSettingsInterface';
import { Container } from 'pixi.js';
/**
 * Renderer is a class used to render particles in the Pixi library.
 *
 * @class Renderer
 */
export default class Renderer extends Container {
    blendMode: any;
    emitter: Emitter;
    turbulenceEmitter: Emitter;
    private _paused;
    private _internalPaused;
    private textures;
    private zeroPad;
    private indexToStart;
    private finishingTextureNames;
    private unusedSprites;
    private emitterParser;
    private turbulenceParser;
    private config;
    private anchor;
    private _model;
    private _ticker;
    private _visibilitychangeBinding;
    private frameCache;
    /**
     * Creates an instance of Renderer.
     *
     * @memberof Renderer
     */
    constructor(settings: ICustomPixiParticlesSettings);
    onComplete: any;
    onCompleteFN: any;
    /**
     * Sets the paused state of the object.
     *
     * @param {boolean} [isPaused=true] - The new paused state of the object. Defaults to `true`.
     * @returns {void}
     */
    pause(isPaused?: boolean): void;
    /**
     * Resumes the object's operation by setting its paused state to false.
     *
     * @returns {void}
     */
    resume(): void;
    /**
     * Updates the transform of the ParticleContainer and updates the emitters.
     */
    _updateTransform(deltaTime: any): void;
    /**
     *
     * @method updateTexture
     * @description This method updates the texture of the unused sprites and children to a randomly generated texture.
     */
    updateTexture(): void;
    /**
     * This method is used to start the emitter and turbulenceEmitter if available.
     * @function start
     */
    start(): void;
    /**
     * Resets the particle emitters in this class without removing existing particles and plays them.
     * @function play
     */
    play(): void;
    /**
     * Immediately stops emitting particles
     */
    stopImmediately(): void;
    /**
     * Destroy particles
     */
    destroy(): void;
    /**
     * Terminates the emitter and any turbulence emitter it is associated with
     */
    stop(): void;
    /**
     * Resets the emitters to their initial state
     */
    resetEmitter(): void;
    /**
     * Sets the textures used by the emitter
     * @param {string[]} textures - Array of strings containing the textures to be used by the emitter
     */
    setTextures(textures: string[]): void;
    /**
     * Updates the configuration of the emitter
     * @param {any} config - Configuration object to be used to update the emitter
     * @param {boolean} resetDuration - should duration be reset
     */
    updateConfig(config: any, resetDuration?: boolean): void;
    /**
     * Updates the position of the emitter
     * @param {Object} position - Object containing the x and y coordinates of the new position
     * @param {boolean} resetDuration - should duration be reset
     */
    updatePosition(position: {
        x: number;
        y: number;
    }, resetDuration?: boolean): void;
    /**
     * Clears the sprite pool, the unused sprites list and the turbulence and particle pools.
     */
    clearPool(): void;
    private getByName;
    private getOrCreateSprite;
    private createFrameAnimationByName;
    private onCreate;
    private onCreateTurbulence;
    private onUpdate;
    private onUpdateTurbulence;
    private onFinishing;
    private onRemove;
    private onRemoveTurbulence;
    private getRandomTexture;
    private getRandomFinishingTexture;
    private getRandomFrameNumber;
    private paused;
    private internalPause;
    private getConfigIndexByName;
    private buildTurbulenceConfig;
}

// tslint:disable:prefer-for-of
import engine from '../index';
import { Emitter } from '../emitter';
import BehaviourNames from '../behaviour/BehaviourNames';
import List from '../util/List';
import ParticlePool from '../ParticlePool';
import { AnimatedSprite, Assets, Container, Sprite, Texture, Ticker } from 'pixi.js';
import Model from '../Model';
/**
 * Renderer is a class used to render particles in the Pixi library.
 *
 * @class Renderer
 */
export default class Renderer extends Container {
    /**
     * Creates an instance of Renderer.
     *
     * @memberof Renderer
     */
    constructor(settings) {
        const { textures, emitterConfig, finishingTextures, animatedSpriteZeroPad, animatedSpriteIndexToStart, vertices, position, rotation, uvs, tint, maxParticles, maxFPS, minFPS, tickerSpeed, } = settings;
        super();
        this._paused = false;
        this._internalPaused = false;
        this.zeroPad = 2;
        this.indexToStart = 0;
        this.unusedSprites = [];
        this.anchor = { x: 0.5, y: 0.5 };
        this._model = new Model();
        this.onComplete = () => {
            /**/
        };
        this.onCompleteFN = () => {
            /**/
        };
        this.getByName = (name) => {
            for (let i = 0; i < this.config.behaviours.length; ++i) {
                if (this.config.behaviours[i].name === name) {
                    return this.config.behaviours[i];
                }
            }
            return null;
        };
        this.config = emitterConfig;
        this.textures = textures;
        this.finishingTextureNames = finishingTextures;
        this.zeroPad = animatedSpriteZeroPad;
        this.indexToStart = animatedSpriteIndexToStart;
        const turbulenceConfigIndex = this.getConfigIndexByName(BehaviourNames.TURBULENCE_BEHAVIOUR, emitterConfig);
        if (turbulenceConfigIndex !== -1) {
            const turbulenceConfig = emitterConfig.behaviours[turbulenceConfigIndex];
            if (turbulenceConfig.enabled === true) {
                this.turbulenceEmitter = new engine.Emitter(this._model);
                this.turbulenceParser = this.turbulenceEmitter.getParser();
                this.turbulenceParser.read(this.buildTurbulenceConfig(turbulenceConfig), this._model);
                this.turbulenceEmitter.on(Emitter.CREATE, this.onCreateTurbulence, this);
                this.turbulenceEmitter.on(Emitter.UPDATE, this.onUpdateTurbulence, this);
                this.turbulenceEmitter.on(Emitter.REMOVE, this.onRemoveTurbulence, this);
            }
        }
        if (typeof emitterConfig.alpha !== 'undefined') {
            this.alpha = emitterConfig.alpha;
        }
        if (typeof emitterConfig.blendMode !== 'undefined') {
            this.blendMode = emitterConfig.blendMode;
        }
        if (typeof emitterConfig.anchor !== 'undefined') {
            this.anchor = emitterConfig.anchor;
        }
        this.emitter = new engine.Emitter(this._model);
        this.emitterParser = this.emitter.getParser();
        this.emitterParser.read(emitterConfig, this._model);
        this.emitter.on(Emitter.CREATE, this.onCreate, this);
        this.emitter.on(Emitter.UPDATE, this.onUpdate, this);
        this.emitter.on(Emitter.FINISHING, this.onFinishing, this);
        this.emitter.on(Emitter.REMOVE, this.onRemove, this);
        this.onCompleteFN = () => this.onComplete();
        this.emitter.on(Emitter.COMPLETE, this.onCompleteFN, this);
        if (this.turbulenceEmitter && this.turbulenceEmitter.list) {
            this.emitter.turbulencePool.list = this.turbulenceEmitter.list;
        }
        this._visibilitychangeBinding = () => this.internalPause(document.hidden);
        document.addEventListener('visibilitychange', this._visibilitychangeBinding);
        const ticker = new Ticker();
        ticker.maxFPS = maxFPS || 60;
        ticker.minFPS = minFPS || 60;
        ticker.speed = tickerSpeed || 0.02;
        ticker.stop();
        // @ts-ignore
        ticker.add(this._updateTransform, this);
        ticker.start();
        this._ticker = ticker;
    }
    /**
     * Sets the paused state of the object.
     *
     * @param {boolean} [isPaused=true] - The new paused state of the object. Defaults to `true`.
     * @returns {void}
     */
    pause(isPaused = true) {
        this.paused(isPaused);
    }
    /**
     * Resumes the object's operation by setting its paused state to false.
     *
     * @returns {void}
     */
    resume() {
        this.paused(false);
    }
    /**
     * Updates the transform of the ParticleContainer and updates the emitters.
     */
    _updateTransform(deltaTime) {
        var _a;
        if (this._paused)
            return;
        (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.update(deltaTime.deltaMS);
        if (this.turbulenceEmitter) {
            this.turbulenceEmitter.update(deltaTime.deltaMS);
        }
    }
    /**
     *
     * @method updateTexture
     * @description This method updates the texture of the unused sprites and children to a randomly generated texture.
     */
    updateTexture() {
        var _a;
        for (let i = 0; i < this.unusedSprites.length; ++i) {
            this.unusedSprites[i].texture = Assets.get(this.getRandomTexture());
        }
        for (let i = 0; i < ((_a = this.children) === null || _a === void 0 ? void 0 : _a.length); ++i) {
            // @ts-ignore
            this.children[i].texture = Texture.from(this.getRandomTexture());
        }
    }
    /**
     * This method is used to start the emitter and turbulenceEmitter if available.
     * @function start
     */
    start() {
        var _a;
        (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.resetAndPlay();
        if (this.turbulenceEmitter) {
            this.turbulenceEmitter.resetAndPlay();
        }
    }
    /**
     * Resets the particle emitters in this class without removing existing particles and plays them.
     * @function play
     */
    play() {
        var _a;
        (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.resetWithoutRemovingAndPlay();
        if (this.turbulenceEmitter) {
            this.turbulenceEmitter.resetWithoutRemovingAndPlay();
        }
    }
    /**
     * Immediately stops emitting particles
     */
    stopImmediately() {
        var _a, _b, _c;
        (_a = this._ticker) === null || _a === void 0 ? void 0 : _a.destroy();
        this._ticker = undefined;
        (_b = this.emitter) === null || _b === void 0 ? void 0 : _b.stop();
        if (this.turbulenceEmitter) {
            this.turbulenceEmitter.stop();
        }
        (_c = this.emitter) === null || _c === void 0 ? void 0 : _c.emit(Emitter.COMPLETE);
    }
    /**
     * Destroy particles
     */
    destroy() {
        this.stopImmediately();
        super.destroy();
        if (this.emitter) {
            this.emitter.destroy();
            this.emitter.off(Emitter.CREATE, this.onCreate, this);
            this.emitter.off(Emitter.UPDATE, this.onUpdate, this);
            this.emitter.off(Emitter.FINISHING, this.onFinishing, this);
            this.emitter.off(Emitter.REMOVE, this.onRemove, this);
            this.emitter.off(Emitter.COMPLETE, this.onCompleteFN, this);
            // @ts-ignore
            this.emitter = undefined;
        }
        // @ts-ignore
        this.turbulenceEmitter = undefined;
        // @ts-ignore
        this.turbulenceParser = undefined;
        // @ts-ignore
        this.unusedSprites = undefined;
        // @ts-ignore
        this._model = undefined;
        this.onComplete = undefined;
        this.onCompleteFN = undefined;
        this.config = undefined;
        // @ts-ignore
        this.textures = undefined;
        // @ts-ignore
        this.finishingTextureNames = undefined;
        // @ts-ignore
        this.emitterParser = undefined;
        // @ts-ignore
        this.textures = undefined;
        document.removeEventListener('visibilitychange', this._visibilitychangeBinding);
    }
    /**
     * Terminates the emitter and any turbulence emitter it is associated with
     */
    stop() {
        var _a;
        (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.stopWithoutKilling();
        if (this.turbulenceEmitter) {
            this.turbulenceEmitter.stop();
        }
    }
    /**
     * Resets the emitters to their initial state
     */
    resetEmitter() {
        var _a;
        (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.reset();
        if (this.turbulenceEmitter) {
            this.turbulenceEmitter.reset();
        }
    }
    /**
     * Sets the textures used by the emitter
     * @param {string[]} textures - Array of strings containing the textures to be used by the emitter
     */
    setTextures(textures) {
        this.textures = textures;
        this.updateTexture();
    }
    /**
     * Updates the configuration of the emitter
     * @param {any} config - Configuration object to be used to update the emitter
     * @param {boolean} resetDuration - should duration be reset
     */
    updateConfig(config, resetDuration = false) {
        var _a;
        (_a = this.emitterParser) === null || _a === void 0 ? void 0 : _a.update(config, this._model, resetDuration);
        if (this.turbulenceEmitter) {
            const turbulenceConfigIndex = this.getConfigIndexByName(BehaviourNames.TURBULENCE_BEHAVIOUR, config);
            if (turbulenceConfigIndex !== -1) {
                const turbulenceConfig = config.behaviours[turbulenceConfigIndex];
                if (turbulenceConfig.enabled === true) {
                    this.turbulenceParser.update(this.buildTurbulenceConfig(turbulenceConfig), this._model, resetDuration);
                }
            }
        }
    }
    /**
     * Updates the position of the emitter
     * @param {Object} position - Object containing the x and y coordinates of the new position
     * @param {boolean} resetDuration - should duration be reset
     */
    updatePosition(position, resetDuration = true) {
        var _a;
        const behaviour = this.getByName(BehaviourNames.SPAWN_BEHAVIOUR);
        behaviour.customPoints[0].position.x = position.x;
        behaviour.customPoints[0].position.y = position.y;
        (_a = this.emitterParser) === null || _a === void 0 ? void 0 : _a.update(this.config, this._model, resetDuration);
    }
    /**
     * Clears the sprite pool, the unused sprites list and the turbulence and particle pools.
     */
    clearPool() {
        this.removeChildren();
        this.unusedSprites = [];
        if (this.turbulenceEmitter && this.turbulenceEmitter.list) {
            if (this.emitter) {
                this.emitter.turbulencePool.list.reset();
                this.emitter.turbulencePool.list = new List();
            }
        }
        if (this.emitter) {
            this.emitter.list.reset();
            this.emitter.list = new List();
        }
        ParticlePool.global.reset();
    }
    getOrCreateSprite() {
        var _a, _b, _c;
        if (this.unusedSprites.length > 0) {
            const sprite = this.unusedSprites.pop();
            if (this.finishingTextureNames && this.finishingTextureNames.length) {
                sprite.texture = Assets.get(this.getRandomTexture());
            }
            return sprite;
        }
        if ((_a = this.emitter) === null || _a === void 0 ? void 0 : _a.animatedSprite) {
            const textures = this.createFrameAnimationByName(this.getRandomTexture());
            if (textures.length) {
                const animation = new AnimatedSprite(textures);
                animation.anchor.set(this.anchor.x, this.anchor.y);
                // @ts-ignore
                animation.loop = (_b = this.emitter) === null || _b === void 0 ? void 0 : _b.animatedSprite.loop;
                // @ts-ignore
                animation.animationSpeed = (_c = this.emitter) === null || _c === void 0 ? void 0 : _c.animatedSprite.frameRate;
                return this.addChild(animation);
            }
        }
        const sprite = new Sprite(Texture.from(this.getRandomTexture()));
        sprite.anchor.set(this.anchor.x, this.anchor.y);
        return this.addChild(sprite);
    }
    createFrameAnimationByName(prefix, imageFileExtension = 'png') {
        const zeroPad = this.zeroPad;
        const textures = [];
        let frame = '';
        let indexFrame = this.indexToStart;
        let padding = 0;
        let texture;
        do {
            frame = indexFrame.toString();
            padding = zeroPad - frame.length;
            if (padding > 0) {
                frame = '0'.repeat(padding) + frame;
            }
            try {
                const fileName = `${prefix}${frame}.${imageFileExtension}`;
                const file = Assets.get(fileName);
                if (file) {
                    texture = file;
                    textures.push(texture);
                    indexFrame += 1;
                }
                else {
                    texture = null;
                }
            }
            catch (e) {
                texture = null;
            }
        } while (texture);
        return textures;
    }
    onCreate(particle) {
        var _a;
        const sprite = this.getOrCreateSprite();
        sprite.visible = true;
        sprite.alpha = 1;
        if (this.blendMode) {
            sprite.blendMode = this.blendMode;
        }
        if (sprite instanceof AnimatedSprite) {
            if ((_a = this.emitter) === null || _a === void 0 ? void 0 : _a.animatedSprite.randomFrameStart) {
                const textures = this.createFrameAnimationByName(this.getRandomTexture());
                sprite.gotoAndPlay(this.getRandomFrameNumber(textures.length));
            }
            else {
                sprite.play();
            }
        }
        particle.sprite = sprite;
    }
    onCreateTurbulence(particle) {
        let sprite;
        if (particle.showVortices) {
            sprite = new Sprite(Texture.from('vortex.png'));
        }
        else {
            sprite = new Sprite();
        }
        sprite.anchor.set(this.anchor.x, this.anchor.y);
        this.addChild(sprite);
        sprite.visible = false;
        sprite.alpha = 0;
        particle.sprite = sprite;
        if (particle.showVortices && sprite) {
            sprite.visible = true;
            sprite.alpha = 1;
        }
    }
    onUpdate(particle) {
        const sprite = particle.sprite;
        sprite.x = particle.x;
        sprite.y = particle.y;
        sprite.scale.x = particle.size.x;
        sprite.scale.y = particle.size.y;
        sprite.tint = particle.color.hex;
        sprite.alpha = particle.color.alpha;
        sprite.rotation = particle.rotation;
    }
    onUpdateTurbulence(particle) {
        const sprite = particle.sprite;
        sprite.x = particle.x;
        sprite.y = particle.y;
        if (particle.showVortices && sprite) {
            sprite.scale.x = particle.size.x;
            sprite.scale.y = particle.size.y;
            sprite.tint = particle.color.hex;
            sprite.alpha = particle.color.alpha;
            sprite.rotation = particle.rotation;
        }
    }
    onFinishing(particle) {
        if (!this.finishingTextureNames || !this.finishingTextureNames.length)
            return;
        const sprite = particle.sprite;
        if (particle.finishingTexture <= this.finishingTextureNames.length - 1) {
            sprite.texture = Texture.from(this.getRandomFinishingTexture());
            particle.finishingTexture++;
        }
    }
    onRemove(particle) {
        const sprite = particle.sprite;
        if (!particle.showVortices && sprite) {
            sprite.visible = false;
            sprite.alpha = 0;
        }
        particle.finishingTexture = 0;
        this.unusedSprites.push(sprite);
        if (sprite instanceof AnimatedSprite) {
            sprite.stop();
        }
    }
    onRemoveTurbulence(particle) {
        const sprite = particle.sprite;
        if (!particle.showVortices && sprite) {
            sprite.visible = false;
            sprite.alpha = 0;
        }
        this.removeChild(sprite);
        delete particle.sprite;
    }
    getRandomTexture() {
        return this.textures[Math.floor(Math.random() * this.textures.length)];
    }
    getRandomFinishingTexture() {
        return this.finishingTextureNames[Math.floor(Math.random() * this.finishingTextureNames.length)];
    }
    getRandomFrameNumber(textures) {
        return Math.floor(Math.random() * textures);
    }
    paused(paused) {
        var _a, _b, _c, _d;
        if (paused === this._paused)
            return;
        this._paused = paused;
        if (paused) {
            (_a = this._ticker) === null || _a === void 0 ? void 0 : _a.stop();
            (_b = this.emitter) === null || _b === void 0 ? void 0 : _b.pause();
        }
        else {
            (_c = this._ticker) === null || _c === void 0 ? void 0 : _c.start();
            (_d = this.emitter) === null || _d === void 0 ? void 0 : _d.resume();
        }
    }
    internalPause(paused) {
        if (this._paused)
            return;
        if (paused === this._internalPaused)
            return;
        this._internalPaused = paused;
    }
    getConfigIndexByName(name, config) {
        let index = -1;
        config.behaviours.forEach((behaviour, i) => {
            if (behaviour.name === name) {
                index = i;
            }
        });
        return index;
    }
    buildTurbulenceConfig(turbulenceConfig) {
        return {
            behaviours: [
                {
                    enabled: true,
                    priority: 10000,
                    maxLifeTime: turbulenceConfig.maxLifeTime || 2,
                    timeVariance: turbulenceConfig.maxLifeTimeVariance || 0,
                    name: 'LifeBehaviour',
                },
                {
                    priority: 100,
                    spawnType: 'Ring',
                    customPoints: [
                        {
                            radius: 0,
                            position: {
                                x: turbulenceConfig.position.x || 0,
                                y: turbulenceConfig.position.y || 0,
                            },
                            positionVariance: {
                                x: turbulenceConfig.positionVariance.x || 0,
                                y: turbulenceConfig.positionVariance.y || 0,
                            },
                        },
                    ],
                    name: 'SpawnBehaviour',
                },
                {
                    enabled: true,
                    priority: 100,
                    velocity: {
                        x: turbulenceConfig.velocity.x || 0,
                        y: turbulenceConfig.velocity.y || 0,
                    },
                    velocityVariance: {
                        x: turbulenceConfig.velocityVariance.x || 0,
                        y: turbulenceConfig.velocityVariance.y || 0,
                    },
                    acceleration: {
                        x: turbulenceConfig.acceleration.x || 0,
                        y: turbulenceConfig.acceleration.y || 0,
                    },
                    accelerationVariance: {
                        x: turbulenceConfig.accelerationVariance.x || 0,
                        y: turbulenceConfig.accelerationVariance.y || 0,
                    },
                    name: 'PositionBehaviour',
                },
                {
                    enabled: true,
                    priority: 0,
                    sizeStart: {
                        x: turbulenceConfig.sizeStart.x || 1,
                        y: turbulenceConfig.sizeStart.y || 1,
                    },
                    sizeEnd: {
                        x: turbulenceConfig.sizeEnd.x || 1,
                        y: turbulenceConfig.sizeEnd.y || 1,
                    },
                    startVariance: turbulenceConfig.startVariance || 0,
                    endVariance: turbulenceConfig.endVariance || 0,
                    name: 'SizeBehaviour',
                },
                {
                    enabled: true,
                    priority: 0,
                    rotation: 12,
                    variance: 0,
                    name: 'RotationBehaviour',
                },
                {
                    enabled: true,
                    priority: 0,
                    showVortices: turbulenceConfig.showVortices || false,
                    turbulence: true,
                    name: 'TurbulenceBehaviour',
                },
            ],
            emitController: {
                _maxParticles: 0,
                _maxLife: 1,
                _emitPerSecond: turbulenceConfig.emitPerSecond || 2,
                _frames: 0,
                name: 'UniformEmission',
            },
            duration: turbulenceConfig.duration || -1,
        };
    }
}
//# sourceMappingURL=Renderer.js.map
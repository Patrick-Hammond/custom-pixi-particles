import { Color, Point } from './util';
import ThereBack from './util/ThereBack';
/**
 * Represents a particle object used in particle system simulations
 */
class Particle {
    /**
     * Constructs a particle object
     */
    constructor() {
        this.next = null;
        this.prev = null;
        /**
         * Stores the unique ID of the particle
         */
        this.uid = Particle._UID.value++;
        /**
         * Stores the movement of the particle
         */
        this.movement = new Point();
        /**
         * Stores the acceleration of the particle
         */
        this.acceleration = new Point();
        /**
         * Stores the velocity of the particle
         */
        this.velocity = new Point();
        /**
         * Stores the size of the particle
         */
        this.size = new Point();
        /**
         * Stores the starting size of the particle
         */
        this.sizeStart = new Point();
        /**
         * Stores the starting warp size of the particle
         */
        this.warpSizeStart = new Point();
        /**
         * Stores the ending size of the particle
         */
        this.sizeEnd = new Point();
        /**
         * Stores the x value of the particle for sin wave
         */
        this.sinXVal = new Point();
        /**
         * Stores the y value of the particle for sin wave
         */
        this.sinYVal = new Point();
        /**
         * Stores the color of the particle
         */
        this.color = new Color();
        /**
         * Stores the starting color of the particle
         */
        this.colorStart = new Color();
        /**
         * Stores the ending color of the particle
         */
        this.colorEnd = new Color();
        this.superColorAlphaEnd = 1;
        this.skipPositionBehaviour = false;
        this.skipAngularVelocityBehaviour = false;
        this.skipColorBehaviour = false;
        this.skipEmitDirectionBehaviour = false;
        this.skipRotationBehaviour = false;
        this.skipSizeBehaviour = false;
        this.skipAttractionRepulsionBehaviour = false;
        this.fromAtoB = false;
        this.fromAtoBTwoWays = false;
        this.pointA = new Point();
        this.pointB = new Point();
        this.there = new ThereBack();
        this.back = new ThereBack();
        this.xStart = 0;
        this.yStart = 0;
        this.xTarget = 0;
        this.yTarget = 0;
        this.thereDuration = 1;
        this.backDuration = 1;
        this.progress = 0;
        this.time = 0;
        this.thereAmplitude = 10;
        this.backAmplitude = 10;
        this.direction = 1;
        this.noiseOffset = new Point();
        this.timeline = [];
        this.initialDirectionCos = 0;
        this.initialDirectionSin = 0;
        this.velocityScale = 1;
        this.rotationAcceleration = 0;
        this.reset();
    }
    /**
     * Resets the particle object
     */
    reset() {
        this.maxLifeTime = 0;
        this.lifeTime = 0;
        this.lifeProgress = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.timeline = [];
        this.skipPositionBehaviour = false;
        this.skipAngularVelocityBehaviour = false;
        this.skipColorBehaviour = false;
        this.skipAttractionRepulsionBehaviour = false;
        this.skipEmitDirectionBehaviour = false;
        this.skipRotationBehaviour = false;
        this.skipSizeBehaviour = false;
        this.movement.set(0, 0);
        this.acceleration.set(0, 0);
        this.velocity.set(0, 0);
        this.sinXVal.set(0, 0);
        this.sinYVal.set(0, 0);
        this.velocityAngle = 0;
        this.radiansPerSecond = 0;
        this.radius = 0;
        this.radiusStart = 0;
        this.radiusEnd = 0;
        this.directionCos = 1;
        this.directionSin = 0;
        this.finishingTexture = 0;
        this.showVortices = false;
        this.turbulence = false;
        this.rotation = 0;
        this.rotationDelta = 0;
        this.size.set(1, 1);
        this.sizeStart.set(0, 0);
        this.warpSizeStart.set(0, 0);
        this.sizeEnd.set(0, 0);
        this.color.set(255, 255, 255, 1);
        this.colorStart.set(0, 0, 0, 1);
        this.colorEnd.set(0, 0, 0, 1);
        this.superColorAlphaEnd = 1;
        this.cameraZ = 0;
        this.cameraZConverter = 10;
        this.warpSpeed = 0;
        this.warpBaseSpeed = 0;
        this.warpFov = 20;
        this.warpStretch = 5;
        this.warpDistanceScaleConverter = 2000;
        this.sizeDifference = { x: 1, y: 1 };
        this.fromAtoB = false;
        this.fromAtoBTwoWays = false;
        this.pointA.set(0, 0);
        this.pointB.set(0, 0);
        this.there.set('', '', '');
        this.back.set('', '', '');
        this.thereDuration = 1;
        this.backDuration = 1;
        this.thereAmplitude = 10;
        this.backAmplitude = 10;
        this.progress = 0;
        this.direction = 1;
        this.time = 0;
        this.xStart = 0;
        this.yStart = 0;
        this.xTarget = 0;
        this.yTarget = 0;
        this.noiseOffset = new Point();
        this.initialDirectionCos = 0;
        this.initialDirectionSin = 0;
        this.velocityScale = 1;
        this.rotationAcceleration = 0;
    }
    /**
     * Checks if the particle is almost dead
     *
     * @return {boolean} True if the particle is almost dead, otherwise false
     */
    isAlmostDead() {
        return this.lifeTime >= this.maxLifeTime - 0.1;
    }
    /**
     * Checks if the particle is dead
     *
     * @return {boolean} True if the particle is dead, otherwise false
     */
    isDead() {
        return this.lifeTime >= this.maxLifeTime;
    }
    /**
     * Hides the particle
     */
    hide() {
        if (!this.sprite)
            return;
        if (!this.sprite.visible)
            return;
        this.sprite.visible = false;
    }
}
Particle._UID = { value: 0 };
export default Particle;
//# sourceMappingURL=Particle.js.map
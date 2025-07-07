import { Point } from '../util';
import { Behaviour, BehaviourNames } from './index';
export default class SizeBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.enabled = true;
        this.priority = 0;
        this.sizeStart = new Point(1, 1);
        this.sizeEnd = new Point(1, 1);
        this.startVariance = 0;
        this.endVariance = 0;
        this.maxSize = new Point(2, 2); // Maximum size clamp
        this.uniformScaling = true; // Toggle for uniform scaling
        this.pulsate = false; // Enable pulsating size effect
        this.pulsationSpeed = 1; // Speed of pulsation
        this.pulsationAmplitude = 0.2; // Amplitude of pulsation
        this.useNoise = false; // Use noise for size modulation
        this.noiseScale = 0.1; // Scale of the noise effect
        this.invertAtMidpoint = false; // Invert size at midpoint
        this.sizeSteps = []; // Array of size points for multi-step transitions
        this.timeOffset = 0; // Delay or advance size scaling
        this.xScalingFunction = 'linear'; // Easing for x-axis
        this.yScalingFunction = 'linear'; // Easing for y-axis
        this.sizeAlphaDependency = false; // Link size to alpha value
        this.init = (particle) => {
            if (!this.enabled)
                return;
            let variance = this.varianceFrom(this.startVariance);
            const sizeStartX = this.sizeStart.x + variance;
            const sizeStartY = this.sizeStart.y + variance;
            variance = this.varianceFrom(this.endVariance);
            const sizeEndX = this.sizeEnd.x + variance;
            const sizeEndY = this.sizeEnd.y + variance;
            particle.sizeDifference = {
                x: sizeEndX - sizeStartX,
                y: sizeEndY - sizeStartY,
            };
            particle.sizeStart.x = sizeStartX;
            particle.sizeStart.y = sizeStartY;
            particle.sizeEnd.x = sizeEndX;
            particle.sizeEnd.y = sizeEndY;
            particle.size.copyFrom(particle.sizeStart);
        };
        this.apply = (particle, deltaTime) => {
            if (!this.enabled || particle.skipSizeBehaviour)
                return;
            let lifeProgress = particle.lifeProgress - this.timeOffset;
            if (lifeProgress < 0)
                return; // Skip if delayed
            if (this.invertAtMidpoint && lifeProgress > 0.5) {
                lifeProgress = 1 - lifeProgress; // Invert at midpoint
            }
            // Handle multi-step transitions
            if (this.sizeSteps.length > 0) {
                this.applyMultiStepSize(particle, lifeProgress);
                return;
            }
            let sizeX = particle.sizeStart.x + particle.sizeDifference.x * this.applyEasing(lifeProgress, this.xScalingFunction);
            let sizeY = this.uniformScaling
                ? sizeX
                : particle.sizeStart.y + particle.sizeDifference.y * this.applyEasing(lifeProgress, this.yScalingFunction);
            // Apply pulsation effect
            if (this.pulsate) {
                const pulseFactor = 1 + Math.sin(particle.lifeTime * this.pulsationSpeed * Math.PI * 2) * this.pulsationAmplitude;
                sizeX *= pulseFactor;
                sizeY *= pulseFactor;
            }
            // Apply noise modulation
            if (this.useNoise) {
                const noiseFactor = this.pseudoRandomNoise(particle.lifeTime * this.noiseScale);
                sizeX *= noiseFactor;
                sizeY *= noiseFactor;
            }
            // Size linked to alpha
            if (this.sizeAlphaDependency) {
                const alphaFactor = particle.color.alpha;
                sizeX *= alphaFactor;
                sizeY *= alphaFactor;
            }
            // Clamp to maximum size
            sizeX = Math.min(sizeX, this.maxSize.x);
            sizeY = Math.min(sizeY, this.maxSize.y);
            particle.size.x = sizeX;
            particle.size.y = sizeY;
        };
        this.applyMultiStepSize = (particle, lifeProgress) => {
            const stepCount = this.sizeSteps.length - 1;
            if (stepCount < 1)
                return; // Skip if fewer than two steps
            const currentStep = Math.floor(lifeProgress * stepCount);
            const nextStep = Math.min(currentStep + 1, stepCount);
            const t = (lifeProgress * stepCount) % 1;
            const sizeStart = this.sizeSteps[currentStep];
            const sizeEnd = this.sizeSteps[nextStep];
            // @ts-ignore
            particle.size.x = sizeStart.x + (sizeEnd.x - sizeStart.x) * this.applyEasing(t, this.xScalingFunction);
            // @ts-ignore
            particle.size.y = sizeStart.y + (sizeEnd.y - sizeStart.y) * this.applyEasing(t, this.yScalingFunction);
        };
        this.applyEasing = (progress, easingType) => {
            switch (easingType) {
                case 'easeIn':
                    return progress * progress;
                case 'easeOut':
                    return 1 - Math.pow(1 - progress, 2);
                case 'easeInOut':
                    return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
                case 'linear':
                default:
                    return progress;
            }
        };
        this.pseudoRandomNoise = (seed) => {
            const prime = 2654435761; // A prime constant
            const x = Math.sin(seed * prime) * 10000; // Scale the randomness
            return x - Math.floor(x); // Ensure result is between 0 and 1
        };
    }
    getName() {
        return BehaviourNames.SIZE_BEHAVIOUR;
    }
    getProps() {
        return {
            enabled: this.enabled,
            priority: this.priority,
            sizeStart: {
                x: this.sizeStart.x,
                y: this.sizeStart.y,
            },
            sizeEnd: {
                x: this.sizeEnd.x,
                y: this.sizeEnd.y,
            },
            startVariance: this.startVariance,
            endVariance: this.endVariance,
            maxSize: {
                x: this.maxSize.x,
                y: this.maxSize.y,
            },
            uniformScaling: this.uniformScaling,
            pulsate: this.pulsate,
            pulsationSpeed: this.pulsationSpeed,
            pulsationAmplitude: this.pulsationAmplitude,
            useNoise: this.useNoise,
            noiseScale: this.noiseScale,
            invertAtMidpoint: this.invertAtMidpoint,
            sizeSteps: this.sizeSteps,
            timeOffset: this.timeOffset,
            xScalingFunction: this.xScalingFunction,
            yScalingFunction: this.yScalingFunction,
            sizeAlphaDependency: this.sizeAlphaDependency,
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=SizeBehaviour.js.map
import { Point } from '../util';
import { Behaviour } from './index';
import Particle from '../Particle';
export default class SizeBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    sizeStart: Point;
    sizeEnd: Point;
    startVariance: number;
    endVariance: number;
    maxSize: Point;
    uniformScaling: boolean;
    pulsate: boolean;
    pulsationSpeed: number;
    pulsationAmplitude: number;
    useNoise: boolean;
    noiseScale: number;
    invertAtMidpoint: boolean;
    sizeSteps: never[];
    timeOffset: number;
    xScalingFunction: string;
    yScalingFunction: string;
    sizeAlphaDependency: boolean;
    init: (particle: Particle) => void;
    apply: (particle: Particle, deltaTime: number) => void;
    applyMultiStepSize: (particle: Particle, lifeProgress: number) => void;
    applyEasing: (progress: number, easingType: string) => number;
    pseudoRandomNoise: (seed: number) => number;
    getName(): string;
    getProps(): {
        enabled: boolean;
        priority: number;
        sizeStart: {
            x: number;
            y: number;
        };
        sizeEnd: {
            x: number;
            y: number;
        };
        startVariance: number;
        endVariance: number;
        maxSize: {
            x: number;
            y: number;
        };
        uniformScaling: boolean;
        pulsate: boolean;
        pulsationSpeed: number;
        pulsationAmplitude: number;
        useNoise: boolean;
        noiseScale: number;
        invertAtMidpoint: boolean;
        sizeSteps: never[];
        timeOffset: number;
        xScalingFunction: string;
        yScalingFunction: string;
        sizeAlphaDependency: boolean;
        name: string;
    };
}

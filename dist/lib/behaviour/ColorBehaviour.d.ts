import { Color } from '../util';
import Behaviour from './Behaviour';
import Particle from '../Particle';
export default class ColorBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    start: Color;
    end: Color;
    startVariance: Color;
    endVariance: Color;
    sinus: boolean;
    colorStops: Color[];
    usePerlin: boolean;
    pulseSpeed: number;
    pulseIntensity: number;
    mirrorTransition: boolean;
    fadeToGray: boolean;
    fadeToTransparent: boolean;
    flickerIntensity: number;
    init: (particle: Particle) => void;
    apply: (particle: Particle) => void;
    applyColorStops: (particle: Particle, lifeProgress: number) => void;
    pseudoRandomNoise(seed: number): number;
    applyPerlinColor: (particle: Particle, lifeProgress: number) => void;
    applyPulseEffect: (particle: Particle, lifeProgress: number) => void;
    applyFadeToGray: (particle: Particle) => void;
    applyFlickering: (particle: Particle) => void;
    getName(): string;
    getProps(): {
        enabled: boolean;
        priority: number;
        start: {
            _r: number;
            _g: number;
            _b: number;
            _alpha: number;
        };
        end: {
            _r: number;
            _g: number;
            _b: number;
            _alpha: number;
        };
        startVariance: {
            _r: number;
            _g: number;
            _b: number;
            _alpha: number;
        };
        endVariance: {
            _r: number;
            _g: number;
            _b: number;
            _alpha: number;
        };
        sinus: boolean;
        colorStops: Color[];
        usePerlin: boolean;
        pulseSpeed: number;
        pulseIntensity: number;
        mirrorTransition: boolean;
        fadeToGray: boolean;
        fadeToTransparent: boolean;
        flickerIntensity: number;
        name: string;
    };
}

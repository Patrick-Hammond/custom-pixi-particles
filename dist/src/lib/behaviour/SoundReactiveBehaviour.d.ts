import { Behaviour } from './index';
import Particle from '../Particle';
import { Color, Point } from '../util';
export default class SoundReactiveBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    isPlaying: boolean;
    useColor: boolean;
    useSize: boolean;
    useVelocity: boolean;
    useRotation: boolean;
    useRandomColor: boolean;
    beatColor: Color;
    audioContext: AudioContext | null;
    analyser: AnalyserNode | null;
    frequencyData: Uint8Array | null;
    amplitudeFactor: number;
    frequencyFactor: number;
    rotationFactor: number;
    beatSensitivity: number;
    velocityFactor: Point;
    init(): void;
    apply(particle: Particle, deltaTime: number): void;
    /**
     * Computes the amplitude (average volume level) from the frequency data.
     */
    getAmplitude(): number;
    /**
     * Finds the dominant frequency (frequency with the highest amplitude).
     */
    getDominantFrequency(): number;
    /**
     * Detects a beat based on amplitude and sensitivity.
     */
    isBeatDetected(amplitude: number): boolean;
    /**
     * Generates a random RGBA color.
     */
    getRandomColor(): Color;
    getName(): string;
    getProps(): {
        enabled: boolean;
        priority: number;
        isPlaying: boolean;
        useColor: boolean;
        useVelocity: boolean;
        useSize: boolean;
        useRotation: boolean;
        useRandomColor: boolean;
        beatColor: Color;
        amplitudeFactor: number;
        frequencyFactor: number;
        rotationFactor: number;
        beatSensitivity: number;
        velocityFactor: Point;
        name: string;
    };
}

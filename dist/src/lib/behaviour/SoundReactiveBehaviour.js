import { Behaviour, BehaviourNames } from './index';
import { Color, Point } from '../util';
export default class SoundReactiveBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.enabled = true;
        this.priority = 0;
        this.isPlaying = false;
        this.useColor = true;
        this.useSize = true;
        this.useVelocity = true;
        this.useRotation = true; // New property for rotation
        this.useRandomColor = true; // New property for random colors
        this.beatColor = new Color(255, 0, 0, 1); // Default beat color (red with full alpha)
        this.audioContext = null; // Audio context for analysis
        this.analyser = null; // Audio analyser node
        this.frequencyData = null; // Frequency data array
        this.amplitudeFactor = 0.1; // Scale factor for amplitude effects
        this.frequencyFactor = 1; // Scale factor for frequency effects
        this.rotationFactor = 0.05; // Scale factor for rotation effects
        this.beatSensitivity = 1; // Sensitivity to detect beats
        this.velocityFactor = new Point(1, 1); // Sensitivity to detect beats
    }
    init() {
        //
    }
    apply(particle, deltaTime) {
        if (!this.enabled || !this.analyser || !this.frequencyData || !this.isPlaying)
            return;
        // Update frequency data
        this.analyser.getByteFrequencyData(this.frequencyData);
        // Compute amplitude and frequency effects
        const amplitude = this.getAmplitude();
        const dominantFrequency = this.getDominantFrequency();
        if (this.useSize) {
            // Apply amplitude effect to size
            particle.size.x += amplitude * this.amplitudeFactor * deltaTime;
            particle.size.y += amplitude * this.amplitudeFactor * deltaTime;
        }
        if (this.useVelocity) {
            // Apply frequency effect to velocity or position
            particle.velocity.x += dominantFrequency * this.frequencyFactor * deltaTime * this.velocityFactor.x;
            particle.velocity.y += dominantFrequency * this.frequencyFactor * deltaTime * this.velocityFactor.y;
        }
        if (this.useRotation) {
            // Apply rotation effect based on dominant frequency
            particle.rotation += dominantFrequency * this.rotationFactor * deltaTime;
        }
        if (this.useColor) {
            // Add beat reaction with color and alpha logic
            if (this.isBeatDetected(amplitude)) {
                const color = this.useRandomColor ? this.getRandomColor() : this.beatColor;
                particle.color.r = color.r;
                particle.color.g = color.g;
                particle.color.b = color.b;
                particle.color.alpha = color.alpha; // Ensure alpha is applied
            }
            else {
                particle.color.r = Math.max(0, particle.color.r - 5); // Fade back to normal
                particle.color.g = Math.max(0, particle.color.g - 5);
                particle.color.b = Math.max(0, particle.color.b - 5);
                particle.color.alpha = Math.max(0, particle.color.alpha - 0.05); // Gradually decrease alpha
            }
        }
    }
    /**
     * Computes the amplitude (average volume level) from the frequency data.
     */
    getAmplitude() {
        if (!this.frequencyData)
            return 0;
        let sum = 0;
        for (let i = 0; i < this.frequencyData.length; i++) {
            sum += this.frequencyData[i];
        }
        return sum / this.frequencyData.length;
    }
    /**
     * Finds the dominant frequency (frequency with the highest amplitude).
     */
    getDominantFrequency() {
        var _a, _b, _c, _d;
        if (!this.frequencyData)
            return 0;
        let maxAmplitude = 0;
        let dominantIndex = 0;
        for (let i = 0; i < this.frequencyData.length; i++) {
            if (this.frequencyData[i] > maxAmplitude) {
                maxAmplitude = this.frequencyData[i];
                dominantIndex = i;
            }
        }
        return (dominantIndex * ((_b = (_a = this.analyser) === null || _a === void 0 ? void 0 : _a.context.sampleRate) !== null && _b !== void 0 ? _b : 0)) / ((_d = (_c = this.analyser) === null || _c === void 0 ? void 0 : _c.fftSize) !== null && _d !== void 0 ? _d : 1);
    }
    /**
     * Detects a beat based on amplitude and sensitivity.
     */
    isBeatDetected(amplitude) {
        return amplitude > this.beatSensitivity * 128; // Threshold for beat detection
    }
    /**
     * Generates a random RGBA color.
     */
    getRandomColor() {
        // Generate a random color if allTheSameColor is false
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = 1; // Ensure alpha is explicitly set
        return new Color(r, g, b, a);
    }
    getName() {
        return BehaviourNames.SOUND_REACTIVE_BEHAVIOUR;
    }
    getProps() {
        return {
            enabled: this.enabled,
            priority: this.priority,
            isPlaying: this.isPlaying,
            useColor: this.useColor,
            useVelocity: this.useVelocity,
            useSize: this.useSize,
            useRotation: this.useRotation,
            useRandomColor: this.useRandomColor, // Include random color toggle in props
            beatColor: this.beatColor, // Include beat color with alpha in props
            amplitudeFactor: this.amplitudeFactor,
            frequencyFactor: this.frequencyFactor,
            rotationFactor: this.rotationFactor,
            beatSensitivity: this.beatSensitivity,
            velocityFactor: this.velocityFactor,
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=SoundReactiveBehaviour.js.map
import BehaviourNames from './BehaviourNames';
import Behaviour from './Behaviour';
export default class TimelineBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.enabled = true;
        this.priority = 0;
        this.timeline = [];
    }
    init(particle) {
        if (!this.enabled)
            return;
        // Set initial properties based on the first timeline entry
        if (this.timeline.length > 0) {
            const initialProperties = this.timeline[0].properties;
            if (initialProperties.size !== undefined) {
                particle.size.x = particle.size.y = initialProperties.size;
            }
            if (initialProperties.color) {
                particle.color.r = initialProperties.color.r;
                particle.color.g = initialProperties.color.g;
                particle.color.b = initialProperties.color.b;
                particle.color.alpha = initialProperties.color.alpha;
            }
            if (initialProperties.rotation !== undefined) {
                particle.rotation = initialProperties.rotation;
            }
        }
    }
    apply(particle, deltaTime) {
        if (!this.enabled)
            return;
        const { lifeTime, maxLifeTime } = particle;
        if (maxLifeTime <= 0)
            return;
        const normalizedTime = lifeTime / maxLifeTime;
        // Find the timeline entries surrounding the normalizedTime
        const before = this.timeline
            .slice()
            .reverse()
            .find((entry) => entry.time <= normalizedTime);
        const after = this.timeline.find((entry) => entry.time > normalizedTime);
        if (before && after) {
            const progress = (normalizedTime - before.time) / (after.time - before.time);
            this.interpolateProperties(particle, before.properties, after.properties, progress);
        }
        else if (before) {
            this.setProperties(particle, before.properties);
        }
    }
    interpolateProperties(particle, before, after, progress) {
        // Interpolate size
        if (before.size !== undefined && after.size !== undefined) {
            particle.size.x = particle.size.y = this.lerp(before.size, after.size, progress);
        }
        // Interpolate color
        if (before.color && after.color) {
            particle.color.r = this.lerp(before.color.r, after.color.r, progress);
            particle.color.g = this.lerp(before.color.g, after.color.g, progress);
            particle.color.b = this.lerp(before.color.b, after.color.b, progress);
            particle.color.alpha = this.lerp(before.color.alpha, after.color.alpha, progress);
        }
        // Interpolate rotation
        if (before.rotation !== undefined && after.rotation !== undefined) {
            particle.rotation = this.lerp(before.rotation, after.rotation, progress);
        }
    }
    setProperties(particle, properties) {
        if (properties.size !== undefined) {
            particle.size.x = particle.size.y = properties.size;
        }
        if (properties.color) {
            particle.color.r = properties.color.r;
            particle.color.g = properties.color.g;
            particle.color.b = properties.color.b;
            particle.color.alpha = properties.color.alpha;
        }
        if (properties.rotation !== undefined) {
            particle.rotation = properties.rotation;
        }
    }
    /**
     * Linear interpolation (lerp) function
     */
    lerp(start, end, t) {
        return start + (end - start) * t;
    }
    getName() {
        return BehaviourNames.TIMELINE_BEHAVIOUR;
    }
    getProps() {
        return {
            enabled: this.enabled,
            priority: this.priority,
            timeline: this.timeline,
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=TimelineBehaviour.js.map
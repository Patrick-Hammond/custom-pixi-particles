import Renderer from './lib/pixi/Renderer';
import { ICustomPixiParticlesSettings } from './lib/customPixiParticlesSettingsInterface';
import TestRenderer from './lib/pixi/TestRenderer';
/**
 * Constructs a renderer for custom pixi particles
 * @class Renderer
 * @param {ICustomPixiParticlesSettings} settings The settings for the renderer
 */
declare const customPixiParticles: {
    create(settings: ICustomPixiParticlesSettings): Renderer;
};
declare const _customPixiParticlesEditorOnly: {
    create(settings: ICustomPixiParticlesSettings): TestRenderer;
};
export { Renderer, customPixiParticles, _customPixiParticlesEditorOnly, ICustomPixiParticlesSettings };

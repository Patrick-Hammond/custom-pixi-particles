export default class Model {
    /**
     * Boolean value indicating whether warping is enabled
     */
    warp: boolean;
    /**
     * The Z position of the camera
     */
    cameraZ: number;
    /**
     * The conversion rate for cameraZ
     */
    cameraZConverter: number;
    /**
     * The speed of warp
     */
    warpSpeed: number;
    /**
     * The base speed of warp
     */
    warpBaseSpeed: number;
    /**
     * Update the model with the behaviour object
     * @param {Object} behaviour - The behaviour object
     */
    update(behaviour: any): void;
    /**
     * Update the camera position based on the delta time
     * @param {number} deltaTime - The delta time
     */
    updateCamera(deltaTime: number): void;
}

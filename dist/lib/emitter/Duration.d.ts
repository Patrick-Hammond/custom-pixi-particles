export default class Duration {
    maxTime: number;
    private _stop;
    private _elapsedTime;
    /**
     * Checks if the time has elapsed.
     * @returns {boolean} Returns true if the time is elapsed, false otherwise.
     */
    isTimeElapsed: () => boolean;
    /**
     * Updates the elapsed time.
     * @param {number} deltaTime - The amount of time that has passed since the last update.
     */
    update: (deltaTime: number) => void;
    /**
     * Resets the elapsed time.
     */
    reset: () => void;
    /**
     * Stops the elapsed time.
     */
    stop: () => void;
    /**
     * Starts the elapsed time.
     */
    start: () => void;
}

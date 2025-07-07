export default class Duration {
    constructor() {
        this.maxTime = -1;
        this._stop = false;
        this._elapsedTime = 0;
        /**
         * Checks if the time has elapsed.
         * @returns {boolean} Returns true if the time is elapsed, false otherwise.
         */
        this.isTimeElapsed = () => {
            return this._stop || (this.maxTime > 0 && this._elapsedTime >= this.maxTime);
        };
        /**
         * Updates the elapsed time.
         * @param {number} deltaTime - The amount of time that has passed since the last update.
         */
        this.update = (deltaTime) => {
            this._elapsedTime += deltaTime;
        };
        /**
         * Resets the elapsed time.
         */
        this.reset = () => {
            this._stop = false;
            this._elapsedTime = 0;
        };
        /**
         * Stops the elapsed time.
         */
        this.stop = () => {
            this._stop = true;
        };
        /**
         * Starts the elapsed time.
         */
        this.start = () => {
            this._stop = false;
        };
    }
}
//# sourceMappingURL=Duration.js.map
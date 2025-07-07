export default class MinMax {
    constructor(min, max) {
        /**
         * Sets the x and y coordinates of a Point
         * @param {number} min - The x coordinate
         * @param {number} max - The y coordinate
         * @return {MinMax} - The MinMax instance
         */
        this.set = (min, max) => {
            this.min = min;
            this.max = max === undefined ? this.max : max;
            return this;
        };
        /**
         * Copies the x and y coordinates from another Point
         * @param {IMinMax} data - The Point instance to copy from
         * @return {MinMax} - The MinMax instance
         */
        this.copyFrom = (data) => {
            this.min = data.min;
            this.max = data.max;
            return this;
        };
        /**
         * Copies the x and y coordinates from an object with numeric x and y properties
         * @param {IMinMax} data - The object to copy from
         * @return {MinMax} - The MinMax instance
         */
        this.copyFromRawData = (data) => {
            this.copyFrom(data);
        };
        /**
         * Adds the x and y coordinates of another Point to this Point
         * @param {IMinMax} data - The other Point instance
         * @return {MinMax} - The MinMax instance
         */
        this.add = (data) => {
            this.min += data.min;
            this.max += data.max;
            return this;
        };
        this.min = min || 0;
        this.max = max || 0;
    }
}
//# sourceMappingURL=MinMax.js.map
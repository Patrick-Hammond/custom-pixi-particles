export default class Point {
    constructor(x, y) {
        /**
         * Sets the x and y coordinates of a Point
         * @param {number} x - The x coordinate
         * @param {number} y - The y coordinate
         * @return {Point} - The Point instance
         */
        this.set = (x, y) => {
            this.x = x;
            this.y = y === undefined ? this.y : y;
            return this;
        };
        /**
         * Copies the x and y coordinates from another Point
         * @param {IPoint} point - The Point instance to copy from
         * @return {Point} - The Point instance
         */
        this.copyFrom = (point) => {
            this.x = point.x || 0;
            this.y = point.y || 0;
            return this;
        };
        /**
         * Copies the x and y coordinates from an object with numeric x and y properties
         * @param {IPoint} data - The object to copy from
         * @return {Point} - The Point instance
         */
        this.copyFromRawData = (data) => {
            this.copyFrom(data);
        };
        /**
         * Adds the x and y coordinates of another Point to this Point
         * @param {IPoint} point - The other Point instance
         * @return {Point} - The Point instance
         */
        this.add = (point) => {
            this.x += point.x;
            this.y += point.y;
            return this;
        };
        this.x = x || 0;
        this.y = y || 0;
    }
}
//# sourceMappingURL=Point.js.map
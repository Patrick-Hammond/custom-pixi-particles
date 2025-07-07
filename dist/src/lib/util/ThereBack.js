export default class ThereBack {
    constructor(x, y, ease) {
        this.set = (x, y, ease) => {
            this.x = x || '';
            this.y = y || '';
            this.ease = ease || '';
            return this;
        };
        this.copyFrom = (data) => {
            this.x = data.x || '';
            this.y = data.y || '';
            this.ease = data.ease || '';
            return this;
        };
        this.copyFromRawData = (data) => {
            this.copyFrom(data);
        };
        this.x = x || '';
        this.y = y || '';
        this.ease = ease || '';
    }
}
//# sourceMappingURL=ThereBack.js.map
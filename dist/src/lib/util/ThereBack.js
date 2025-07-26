export default class ThereBack {
    x;
    y;
    ease;
    constructor(x, y, ease) {
        this.x = x || '';
        this.y = y || '';
        this.ease = ease || '';
    }
    set = (x, y, ease) => {
        this.x = x || '';
        this.y = y || '';
        this.ease = ease || '';
        return this;
    };
    copyFrom = (data) => {
        this.x = data.x || '';
        this.y = data.y || '';
        this.ease = data.ease || '';
        return this;
    };
    copyFromRawData = (data) => {
        this.copyFrom(data);
    };
}
//# sourceMappingURL=ThereBack.js.map
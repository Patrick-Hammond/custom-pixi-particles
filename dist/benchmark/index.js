import List from '../src/lib/util/List';
import Color from '../src/lib/util/Color';
function benchEmitterUpdateParticles() {
    const list = new List();
    for (let i = 0; i < 1000; i++) {
        list.add({});
    }
    const oldStyle = () => {
        list.forEach(() => { });
    };
    const newStyle = () => {
        let current = list.first;
        while (current) {
            current = current.next;
        }
    };
    const iterations = 10000;
    let start = Date.now();
    for (let i = 0; i < iterations; i++)
        oldStyle();
    const oldTime = Date.now() - start;
    start = Date.now();
    for (let i = 0; i < iterations; i++)
        newStyle();
    const newTime = Date.now() - start;
    console.log('updateParticles old vs new (ms):', oldTime, newTime);
}
function benchAmplitude() {
    const data = new Uint8Array(1024);
    for (let i = 0; i < data.length; i++)
        data[i] = Math.floor(Math.random() * 256);
    const oldReduce = () => {
        return data.reduce((a, b) => a + b, 0) / data.length;
    };
    const newLoop = () => {
        let sum = 0;
        for (let i = 0; i < data.length; i++)
            sum += data[i];
        return sum / data.length;
    };
    const iterations = 10000;
    let start = Date.now();
    for (let i = 0; i < iterations; i++)
        oldReduce();
    const oldTime = Date.now() - start;
    start = Date.now();
    for (let i = 0; i < iterations; i++)
        newLoop();
    const newTime = Date.now() - start;
    console.log('getAmplitude old vs new (ms):', oldTime, newTime);
}
class OldColor {
    constructor(r = 0, g = 0, b = 0, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = a;
    }
    get hex() {
        let hex = this.r << 16;
        hex = hex | (this.g << 8);
        hex = hex | this.b;
        return hex;
    }
    set hex(value) {
        this.r = (value & 0xff0000) >> 16;
        this.g = (value & 0xff00) >> 8;
        this.b = value & 0xff;
    }
}
function benchColorHex() {
    const oldColor = new OldColor(10, 20, 30, 1);
    const newColor = new Color(10, 20, 30, 1);
    const loops = 100000;
    let sum = 0;
    let start = Date.now();
    for (let i = 0; i < loops; i++)
        sum += oldColor.hex;
    const oldTime = Date.now() - start;
    sum = 0;
    start = Date.now();
    for (let i = 0; i < loops; i++)
        sum += newColor.hex;
    const newTime = Date.now() - start;
    console.log('Color hex old vs new (ms):', oldTime, newTime);
}
benchEmitterUpdateParticles();
benchAmplitude();
benchColorHex();
//# sourceMappingURL=index.js.map
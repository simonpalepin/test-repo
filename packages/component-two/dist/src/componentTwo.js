"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentTwo = void 0;
const component_one_1 = require("@test-repo/component-one");
class ComponentTwo {
    constructor(name = '') {
        new component_one_1.ComponentOne('form two');
        console.log(`ComponentTwo . ${name}`);
    }
}
exports.ComponentTwo = ComponentTwo;
//# sourceMappingURL=componentTwo.js.map
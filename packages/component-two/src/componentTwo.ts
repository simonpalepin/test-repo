import { ComponentOne } from '@test-repo/component-one';
export class ComponentTwo {
  constructor(name: string = '') {
    new ComponentOne('form two');
    console.log(`ComponentTwo . ${name}`);
  }
}

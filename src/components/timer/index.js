import template from './timer.pug';
import './timer.scss';

export default class Timer {
  constructor(options) {
    this.elem = document.createElement('div');
    this.elem.className = 'timer__content';
    this.elem.innerHTML = template(options);
  }
}

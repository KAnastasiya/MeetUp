import template from './past-events.pug';
import './past-events.scss';

export default class PastEvents {
  constructor(options) {
    this.elem = document.createElement('section');
    this.elem.className = 'past-events';
    this.elem.innerHTML = template(options);
  }
}

import template from './sponsors.pug';
import './sponsors.scss';

export default class Sponsors {
  constructor(options) {
    this.elem = document.createElement('section');
    this.elem.className = 'sponsors';
    this.elem.innerHTML = template(options);
  }
}

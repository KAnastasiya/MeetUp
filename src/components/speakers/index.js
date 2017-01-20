import template from './speakers.pug';
import './speakers.scss';

export default class Speakers {
  constructor(options) {
    this.elem = document.createElement('section');
    this.elem.className = 'speakers';
    this.elem.innerHTML = template(options);
  }
}

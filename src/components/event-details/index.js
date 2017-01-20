import template from './event-details.pug';
import './event-details.scss';

export default class Socials {
  constructor(options) {
    this.elem = document.createElement('ul');
    this.elem.className = 'event-details';
    this.elem.innerHTML = template(options);
  }
}

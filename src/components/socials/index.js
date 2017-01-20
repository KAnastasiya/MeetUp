import template from './socials.pug';
import './socials.scss';

export default class Socials {
  constructor(options) {
    this.elem = document.createElement('ul');
    this.elem.className = 'socials__list';
    this.elem.innerHTML = template(options);
  }
}

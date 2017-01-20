import template from './contact.pug';
import './contact.scss';

export default class Contacts {
  constructor(options) {
    this.elem = document.createElement('section');
    this.elem.className = 'contact';
    this.elem.innerHTML = template(options);
  }
}

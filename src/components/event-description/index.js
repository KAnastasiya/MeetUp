import template from './event-description.pug';
import './event-description.scss';

export default class EventDescription {
  constructor(options) {
    this.elem = document.createElement('div');
    this.elem.className = 'event-description';
    this.elem.innerHTML = template(options);
  }
}

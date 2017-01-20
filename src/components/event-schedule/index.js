import template from './event-schedule.pug';
import './event-schedule.scss';

export default class EventSchedule {
  constructor(options) {
    this.elem = document.createElement('div');
    this.elem.className = 'event-schedule';
    this.elem.innerHTML = template(options);
  }
}

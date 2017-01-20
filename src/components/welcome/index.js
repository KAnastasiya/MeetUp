import Header from '../header';
import Timer from '../timer';

import template from './welcome.pug';
import './welcome.scss';

import { getTimeRemaining, setLeadingZero } from '../../common/js/utils';

export default class Welcome {
  constructor(options) {
    this.elem = document.createElement('section');
    this.elem.className = 'welcome';
    this.elem.innerHTML = template(options);
    this.lastDate = new Date(2017, 2, 31);
    this.renderHeader();

    const timeInterval = setInterval(() => {
      const t = getTimeRemaining(this.lastDate);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
      const timer = document.querySelector('.timer');
      timer.innerHTML = '';
      this.renderTimer(t);
    }, 1000);
  }

  renderHeader() {
    const header = new Header();
    this.elem.querySelector('.header').appendChild(header.elem);
  }

  renderTimer(t) {
    const timer = new Timer({
      days: setLeadingZero(t.days),
      hours: setLeadingZero(t.hours),
      minutes: setLeadingZero(t.minutes),
      seconds: setLeadingZero(t.seconds),
    });

    this.elem.querySelector('.timer').appendChild(timer.elem);
  }
}

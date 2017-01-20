import template from './elite-rewards.pug';
import './elite-rewards.scss';

export default class EliteRewards {
  constructor(options) {
    this.elem = document.createElement('section');
    this.elem.className = 'elite-rewards';
    this.elem.innerHTML = template(options);
  }
}

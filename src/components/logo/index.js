import logo from './img/logo.png';
import './logo.scss';

export default class Logo {
  constructor() {
    this.elem = document.createElement('img');
    this.elem.className = 'logo__img';
    this.elem.src = logo;
  }
}

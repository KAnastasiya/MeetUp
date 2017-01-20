import logo from './img/logo.png';

export default class Logo {
  constructor() {
    this.elem = document.createElement('img');
    this.elem.className = 'logo__img';
    this.elem.src = logo;
    this.elem.width = 230;
    this.elem.height = 60;
  }
}

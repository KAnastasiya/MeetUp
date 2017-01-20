import template from './sign-up.pug';
import './sign-up.scss';

export default class SignUp {
  constructor(options) {
    this.elem = document.createElement('div');
    this.elem.className = 'signUp';
    this.elem.innerHTML = template(options);
  }
}

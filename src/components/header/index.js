import Logo from '../logo';
import Navigations from '../navigations';
import template from './header.pug';
import './header.scss';

export default class Header {
  constructor(options) {
    this.elem = document.createElement('div');
    this.elem.className = 'header-content';
    this.elem.innerHTML = template(options);
    this.renderLogo();
    this.renderNavigations();
  }

  renderLogo() {
    const logo = new Logo();
    this.elem.querySelector('.logo').appendChild(logo.elem);
  }

  renderNavigations() {
    const navigations = new Navigations({
      items: [{
        href: 'event-details',
        name: 'Event Details',
      }, {
        href: 'speakers',
        name: 'Speakers',
      }, {
        href: 'sponsors',
        name: 'Sponsors',
      }, {
        href: 'past-events',
        name: 'Past Events',
      }, {
        href: 'contact',
        name: 'Contact',
      }],
    });

    this.elem.querySelector('.navigations').appendChild(navigations.elem);
  }
}

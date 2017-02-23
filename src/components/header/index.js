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
    this.renderMenuIcon();
    this.renderNavigations();
  }

  renderLogo() {
    const logo = new Logo();
    this.elem.querySelector('.logo').appendChild(logo.elem);
  }

  renderMenuIcon() {
    this.menuIcon = document.createElement('a');
    this.menuIcon.className = 'navigations__menu-icon';
    this.elem.querySelector('.navigations').appendChild(this.menuIcon);
    this.menuIcon.addEventListener('click', this.onMenuIconClick);
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

  onMenuIconClick() {
    const navList = document.querySelector('.navigations__list');
    if (navList.classList.contains('open')) {
      navList.classList.remove('open');
    } else {
      navList.classList.add('open');
    }
  }
}

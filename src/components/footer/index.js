import Socials from '../socials';
import template from './footer.pug';
import './footer.scss';

export default class Footer {
  constructor(options) {
    this.elem = document.createElement('footer');
    this.elem.className = 'footer';
    this.elem.innerHTML = template(options);
    this.renderSocials();

    this.onToTopClick = this.onToTopClick.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.elem.querySelector('.link--to-top').addEventListener('click', this.onToTopClick);
  }

  renderSocials() {
    const socials = new Socials({
      items: [{
        href: '#',
        name: 'facebook',
      }, {
        href: '#',
        name: 'twitter',
      }, {
        href: '#',
        name: 'linked-in',
      }, {
        href: '#',
        name: 'google',
      }, {
        href: '#',
        name: 'tumblr',
      }],
    });

    this.elem.querySelector('.socials').appendChild(socials.elem);
  }

  scrollToTop() {
    window.scrollBy(0, -70);
    if (window.pageYOffset > 0) {
      requestAnimationFrame(this.scrollToTop);
    }
  }

  onToTopClick(event) {
    event.preventDefault();
    this.scrollToTop();
  }
}

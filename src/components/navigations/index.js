import template from './navigations.pug';
import './navigations.scss';
import { getCurrentScrollPosition } from '../../common/js/utils';

export default class Navigations {
  constructor(options) {
    this.elem = document.createElement('nav');

    this.renderToggle();
    this.renderList(options);

    this.onToggleClick = this.onToggleClick.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onPageScroll = this.onPageScroll.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);

    window.addEventListener('scroll', this.onPageScroll);
    document.addEventListener('click', this.onDocumentClick);
  }

  renderToggle() {
    this.toggleIcon = document.createElement('a');
    this.toggleIcon.className = 'navigations__menu-icon';
    this.elem.appendChild(this.toggleIcon);
    this.toggleIcon.addEventListener('click', this.onToggleClick);
  }

  renderList(options) {
    this.list = document.createElement('ul');
    this.list.className = 'navigations__list';
    this.list.innerHTML = template(options);
    this.elem.appendChild(this.list);

    this.items = this.getItems();
    this.chooseItem(this.items[0]);
    this.list.addEventListener('click', this.onItemClick);
  }

  hideMenu() {
    this.list = document.querySelector('.navigations__list');
    this.list.classList.remove('open');
  }

  getItems() {
    const items = this.list.querySelectorAll('.navigations__link');
    const links = [];
    for (let i = 0; i < items.length; i++) {
      links[i] = items[i];
    }
    return links;
  }

  chooseItem(item) {
    this.items.forEach(elem => elem.classList.remove('navigations__link--active'));
    item.classList.add('navigations__link--active');

    const hash = `#${item.getAttribute('href')}`;
    history.replaceState({ page: `${hash}` }, '', `${hash}`);
  }

  onToggleClick() {
    this.list = document.querySelector('.navigations__list');
    this.list.classList.toggle('open');
  }

  onItemClick(event) {
    const element = event.target;

    if (element.hasAttribute('href')) {
      event.preventDefault();

      const body = document.body;
      const position = getCurrentScrollPosition();
      const href = `#${element.getAttribute('href')}`;

      const targetOffset = document.querySelector(href).offsetTop;
      const scrollTranslate = targetOffset > position ? `-${targetOffset - position}` : position - targetOffset;

      body.classList.add('in-transition');
      body.style.WebkitTransform = `translate(0, ${scrollTranslate}px)`;
      body.style.MozTransform = `translate(0, ${scrollTranslate}px)`;
      body.style.transform = `translate(0, ${scrollTranslate}px)`;

      window.setTimeout(() => {
        body.classList.remove('in-transition');
        body.style.cssText = '';
        window.scrollTo(0, targetOffset);
        this.chooseItem(element);
      }, 900);
    }
  }

  onPageScroll() {
    this.hideMenu();

    const scrollItemsList = this.items
      .map(link => {
        const item = link.getAttribute('href');
        return item;
      })
      .filter(item => document.querySelector(`#${item}`).offsetTop <= getCurrentScrollPosition());

    const currentItemId = scrollItemsList[scrollItemsList.length - 1] || this.items[0].getAttribute('href');
    this.items.forEach(item => {
      if (item.getAttribute('href') === currentItemId) {
        this.chooseItem(item);
      }
    });
  }

  onDocumentClick(event) {
    event.stopPropagation();
    if (!event.target.closest('.navigations')) {
      this.hideMenu();
    }
  }
}

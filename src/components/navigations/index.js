import template from './navigations.pug';
import './navigations.scss';
import { getCurrentScrollPosition } from '../../common/js/utils';

export default class Navigations {
  constructor(options) {
    this.elem = document.createElement('ul');
    this.elem.className = 'navigations__list';
    this.elem.innerHTML = template(options);

    this.items = this.getItems();
    this.chooseItem(this.items[0]);

    this.onItemClick = this.onItemClick.bind(this);
    this.onPageScroll = this.onPageScroll.bind(this);

    this.elem.addEventListener('click', this.onItemClick);
    window.addEventListener('scroll', this.onPageScroll);
  }

  getItems() {
    const items = this.elem.querySelectorAll('.navigations__link');
    const links = [];
    for (let i = 0; i < items.length; i++) {
      links[i] = items[i];
    }
    return links;
  }

  chooseItem(item) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].classList.remove('navigations__link--active');
    }
    item.classList.add('navigations__link--active');

    // Обновление адресной строки
    const hash = item.getAttribute('href').slice(1);
    history.replaceState({ page: `${hash}` }, '', `${hash}`);
  }

  onItemClick(event) {
    const body = document.body;
    const element = event.target;

    if (element.hasAttribute('href')) {
      event.preventDefault();

      const href = element.getAttribute('href');
      const targetOffset = (href !== '#event-details') ? document.querySelector(href).offsetTop : 0;
      const currentPosition = getCurrentScrollPosition();
      const scrollTranslate = (targetOffset > currentPosition) ? `-${targetOffset - currentPosition}` : (currentPosition - targetOffset);

      body.classList.add('in-transition');
      body.style.WebkitTransform = `translate(0, ${scrollTranslate}px)`;
      body.style.MozTransform = `translate(0, ${scrollTranslate}px)`;
      body.style.transform = `translate(0, ${scrollTranslate}px)`;

      window.setTimeout(() => {
        body.classList.remove('in-transition');
        body.style.cssText = '';
        window.scrollTo(0, targetOffset);
      }, 900);

      this.chooseItem(element);
    }
  }

  onPageScroll() {
    const currentPosition = getCurrentScrollPosition();

    // Get scroll-items
    const scrollItemsList = this.items.map((link) => {
      const item = link.getAttribute('href');
      let scrollItem;
      if (item !== '#event-details') {
        scrollItem = item;
      }
      return scrollItem;
    });

    // Get scroll-items state (if 'undefined' - item was not scrolled)
    const currentScrollItems = scrollItemsList.map((item) => {
      let temp;
      if (item && (document.querySelector(item).offsetTop < currentPosition)) {
        temp = item;
      }
      return temp;
    });

    // Get only scroll-items, that yet was scrolled
    const onlyScrolledItems = currentScrollItems.filter((item) => {
      let temp;
      if (item) {
        temp = item;
      }
      return temp;
    });

    // Get id of the current scroll-items
    const currentItemId = onlyScrolledItems[onlyScrolledItems.length - 1] || '#event-details';

    // Choose current scroll-item
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getAttribute('href') === currentItemId) {
        this.chooseItem(this.items[i]);
      }
    }
  }
}

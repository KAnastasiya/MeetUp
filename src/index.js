import Welcome from './components/welcome';
import Event from './components/event';
import EliteRewards from './components/elite-rewards';
import Speakers from './components/speakers';

import Sponsors from './components/sponsors';
import sponsor1 from './components/sponsors/img/1.png';
import sponsor2 from './components/sponsors/img/2.png';
import sponsor3 from './components/sponsors/img/3.png';

import PastEvents from './components/past-events';
import Contact from './components/contact';
import Footer from './components/footer';

import './common/scss/scaffolding.scss';
import './common/scss/form.scss';

const topAnchor = document.createElement('a');
topAnchor.setAttribute('id', 'top');
document.body.appendChild(topAnchor);

const welcome = new Welcome();
document.body.appendChild(welcome.elem);

const event = new Event();
document.body.appendChild(event.elem);

const eliteRewards = new EliteRewards();
document.body.appendChild(eliteRewards.elem);

const speakers = new Speakers({
  items: [
    {
      name: 'Speaker1',
      topic: 'Topic1',
      contacts: [
        {
          type: 'facebook',
        },
        {
          type: 'twitter',
        },
        {
          type: 'behance',
        },
        {
          type: 'dribble',
        },
      ],
    },
    {
      name: 'Shahriyer Shuvo',
      topic: 'More about selling in the Envato Marketplaces',
      contacts: [
        {
          type: 'behance',
        },
        {
          type: 'dribble',
        },
      ],
    },
    {
      name: 'Speaker3',
      topic: 'Topic3',
      contacts: [
        {
          type: 'facebook',
        },
        {
          type: 'dribble',
        },
      ],
    },
    {
      name: 'Speaker4',
      topic: 'Topic4',
      contacts: [
        {
          type: 'dribble',
        },
      ],
    },
    {
      name: 'Logo',
    },
    {
      name: 'Speaker5',
      topic: 'Topic5',
      contacts: [
        {
          type: 'facebook',
        },
        {
          type: 'twitter',
        },
        {
          type: 'behance',
        },
        {
          type: 'dribble',
        },
      ],
    },
    {
      name: 'Speaker6',
      topic: 'Topic6',
      contacts: [],
    },
    {
      name: 'Speaker7',
      topic: 'Topic7',
      contacts: [
        {
          type: 'twitter',
        },
        {
          type: 'behance',
        },
      ],
    },
    {
      name: 'Speaker8',
      topic: 'Topic8',
      contacts: [
        {
          type: 'facebook',
        },
        {
          type: 'twitter',
        },
      ],
    },
  ],
});
document.body.appendChild(speakers.elem);

const sponsors = new Sponsors({
  items: [
    {
      name: 'sponsor1',
      src: sponsor1,
    },
    {
      name: 'sponsor2',
      src: sponsor2,
    },
    {
      name: 'sponsor3',
      src: sponsor3,
    },
  ],
});
document.body.appendChild(sponsors.elem);

const pastEvents = new PastEvents();
document.body.appendChild(pastEvents.elem);

const contact = new Contact();
document.body.appendChild(contact.elem);

const footer = new Footer();
document.body.appendChild(footer.elem);

const toTop = document.querySelector('.link--to-top');
window.addEventListener('scroll', () => {
  if (toTop.classList.contains('fadeIn') && window.pageYOffset < 2300) {
    toTop.classList.add('fadeOut');
  } else if (window.pageYOffset > 2300) {
    toTop.classList.remove('fadeOut');
    toTop.classList.add('fadeIn');
  }
});

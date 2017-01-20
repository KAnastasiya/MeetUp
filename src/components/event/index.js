import Description from '../event-description';
import SignUp from '../sign-up';

import Details from '../event-details';
import community from './img/community.png';
import talkShop from './img/talk-shop.png';
import warStories from './img/war-stories.png';

import Schedule from '../event-schedule';

export default class Event {
  constructor() {
    this.elem = document.createElement('section');
    this.elem.className = 'event container container--column';
    this.renderDescription();
    this.renderSignUp();
    this.renderDetails();
    this.renderSchedule();
  }

  renderDescription() {
    const description = new Description();
    this.elem.appendChild(description.elem);
  }

  renderSignUp() {
    const signUp = new SignUp();
    this.elem.querySelector('.event-description').appendChild(signUp.elem);
  }

  renderDetails() {
    const details = new Details({
      items: [{
        img: community,
        title: 'Community',
        text: 'Meet the Community you’ve always talked with, in real life! This meetup will be all about authors engaging each other with interesting coversation and topics. We will have loads of fun.',
      }, {
        img: talkShop,
        title: 'Talk Shop',
        text: 'In this meetup you will get to know the marketplaces better, because that’s why were all here for right? Learn a few tips and tricks from experienced authors from all over the country.',
      }, {
        img: warStories,
        title: 'War Stories',
        text: 'Gather round fellow authors! Hear the stories of success from your favorite authors and learn how they we able to tackle their problems and become successful.',
      }],
    });

    this.elem.appendChild(details.elem);
  }

  renderSchedule() {
    const schedule = new Schedule({
      items: [{
        time: '10am - 12pm',
        text: 'Introduction and presentations about Envato',
      }, {
        time: '12pm - 02 pm',
        text: 'Sessions by honorable guests and Speakers',
      }, {
        time: '02pm - 03pm',
        text: 'Break and Mingle time with the authors',
      }, {
        time: '03pm - 05pm',
        text: 'Portfolio Review, Rewards and Ending Presentation',
      }],
    });

    this.elem.appendChild(schedule.elem);
  }
}

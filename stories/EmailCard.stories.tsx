import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  EmailCard,
  EmailCardAddButton,
} from '../src/components/EmailCard';

const loaderStories = storiesOf('EmailCard', module);

const statistics = [
  { label: 'Emails Sent', amount: 12230, format: 'number' },
  { label: 'Delivered', amount: .966, format: 'percent' },
  { label: 'Unique Opens', amount: .802, format: 'percent' },
  { label: 'Unique Clicks', amount: .6024, format: 'percent' },
  { label: 'Unsubscribes', amount: .0204, format: 'percent' },
];

const renderEditDetailLink = (value: string) => {
  return (
    <a href="#">
      {value}
    </a>
  );
};

const details = [
  { label: 'Subject', value: 'Welcome to SendGrid', renderEditDetailLink },
  { label: 'Preheader', value: 'Get starting sending up to 12,000 emails Today', renderEditDetailLink },
  { label: 'From Sender', value: 'Tyler Hale <tyler.hale@sendgrid.com>', renderEditDetailLink },
];

const renderSendTimeLink = (value: string) => {
  return (
    <a href="#">
      {value || 'Select Send Time'}
    </a>
  );
};

const onContentEditClick = (e: MouseEvent) => {
  return true;
};

const cardData = {
  details,
  n: 1,
  onContentEditClick,
  renderSendTimeLink,
  statistics,
};

const cardDataNoStats = {
  details,
  n: 1,
  onContentEditClick,
  renderSendTimeLink,
};

const cardDataWithImage = {
  details,
  n: 1,
  onContentEditClick,
  renderSendTimeLink,
  statistics,
  thumbnailUrl: 'http://via.placeholder.com/128x88',
};

loaderStories.add('Email Card', () => ( <EmailCard sendTimeValue="Send Instantly" {...cardData} /> ));

loaderStories.add('Email Card with No Statistics', () => (
  <EmailCard sendTimeValue="Send Instantly" {...cardDataNoStats} />
));

loaderStories.add('Email Card with Content', () => (
  <EmailCard sendTimeValue="Send Instantly" {...cardDataWithImage} />
));

loaderStories.add('Email Card - Edit Mode', () => (<EmailCard {...cardDataNoStats} editing /> ));

loaderStories.add('Email Card - Live', () => ( <EmailCard {...cardData} sendTimeValue="Send Instantly" live /> ));

loaderStories.add('Email Card - Paused', () => ( <EmailCard {...cardData} sendTimeValue="Send Instantly" paused/> ));

loaderStories.add('Email Card - Multi Editable', () => (
  <div>
    <EmailCard {...cardData} editable />
    <EmailCard {...cardData} n={2} editable />
    <EmailCard {...cardData} n={3} editable />
    <EmailCard {...cardData} n={4} editable />
    <EmailCardAddButton onClick={null} />
  </div>
));

loaderStories.add('Email Card - Multi Live', () => (
  <div>
    <EmailCard {...cardData} live sendTimeValue="Send Instantly"/>
    <EmailCard {...cardData} n={2} live sendTimeValue="Send 3 Days After Email 1"/>
    <EmailCard {...cardData} n={3} live sendTimeValue="Send 3 Days After Email 2"/>
    <EmailCard {...cardData} n={4} live sendTimeValue="Send 3 Days After Email 3"/>
  </div>
));

const onSaveAlertClick = () => {
  return true;
};
loaderStories.add('Email Card with Alerts ', () => (
  <EmailCard {...cardData} live hasSaveAlert onSaveAlertClick={onSaveAlertClick} sendTimeValue="Send Instantly"/>
));
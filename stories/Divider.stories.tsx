import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Divider from '../src/components/Divider';

const stories = storiesOf('Divider', module);

stories.add('Divider', () => <Divider />);

stories.add('Divider (Thin)', () => <Divider thin />);

stories.add('Divider (with Label)', () => <Divider label="Very Important" />);
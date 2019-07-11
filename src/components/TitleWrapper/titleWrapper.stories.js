import React from 'react';

import { storiesOf } from '@storybook/react';

import TitleWrapper from './index';
import Link from '../Link';

storiesOf('TitleWrapper', module)
  .add('default', () => (
    <TitleWrapper title="Testnet Goals">
      <p>Content</p>
    </TitleWrapper>
  ))
  .add('with subtitle', () => (
    <TitleWrapper
      title="Testnet Goals"
      subtitle={
        <>
          The goals below is a simplified representation of the Key Results listed in our
          <Link href="/#"> Release OKR</Link>
        </>
      }
    >
      <p>Content</p>
    </TitleWrapper>
  ));

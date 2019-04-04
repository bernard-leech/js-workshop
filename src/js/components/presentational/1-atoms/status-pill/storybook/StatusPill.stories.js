import React from 'react'
import { storiesOf } from '@storybook/react'

import Component from '../StatusPill'
import { propsError, propsSuccess } from '../test/StatusPill.mock'

const stories = storiesOf('Molecules - StatusPill', module)

stories
  .add('StatusPill - error', () => {
    return (
      <Component {...propsError} />
    )
  })
  .add('StatusPill - success', () => {
    return (
      <Component {...propsSuccess} />
    )
  })

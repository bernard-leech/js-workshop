import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'

import Component from '../Date'
import { props } from '../test/Date.mock'

const stories = storiesOf('Atoms - Date', module)

stories.add('Date', () => {
  return (
    <Component {...props} />
  )
})

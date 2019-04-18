import React from 'react'
import { storiesOf } from '@storybook/react'

import Component from '../Money'
import { props } from '../test/Money.mock'

const stories = storiesOf('Molecules - Money', module)

stories.add('Money', () => {
  return (
    <Component {...props} />
  )
})

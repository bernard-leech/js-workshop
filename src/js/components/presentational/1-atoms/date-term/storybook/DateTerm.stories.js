import React from 'react'
import { storiesOf } from '@storybook/react'

import Component from '../DateTerm'
import { props } from '../test/DateTerm.mock'

const stories = storiesOf('Atoms - DateTerm', module)

stories.add('DateTerm', () => {
  return (
    <Component {...props} />
  )
})

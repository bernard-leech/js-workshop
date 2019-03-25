import React from 'react'
import { storiesOf } from '@storybook/react'
import Component from '../TableRow'
import { props } from '../test/TableRow.mock'

const stories = storiesOf('Molecules - TableRow', module)

stories.add('TableRow', () => {
  return (
      <Component {...props} />
  )
})

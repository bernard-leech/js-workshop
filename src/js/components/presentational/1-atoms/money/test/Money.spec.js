import React from 'react'
import TestRenderer from 'react-test-renderer'

import { props } from '../test/Money.mock'

import Money from '../Money'

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<Money {...props} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

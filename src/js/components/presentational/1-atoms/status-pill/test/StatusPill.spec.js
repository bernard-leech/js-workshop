import React from 'react'
import TestRenderer from 'react-test-renderer'

import { propsError, propsSuccess } from './StatusPill.mock'

import StatusPill from '../StatusPill'

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<StatusPill />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly - success', () => {
  const tree = TestRenderer
    .create(<StatusPill {...propsSuccess} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly - error', () => {
  const tree = TestRenderer
    .create(<StatusPill {...propsError} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

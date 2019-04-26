import React from 'react'
import TestRenderer from 'react-test-renderer'

import { props } from '../test/TableRow.mock'

import TableRow from '../TableRow'

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<TableRow />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

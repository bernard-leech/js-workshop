// @flow
import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import Component from '../TableRow'
import { props } from '../test/TableRow.mock'

describe('<TableRow />', () => {
  it('renders correctly', () => {
    const tree = mount(<Component {...props} />)
    expect(tree.debug()).to.matchSnapshot()
  })
})

// @flow
import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import Component from '../StatusPill'
import { props } from '../test/StatusPill.mock'

describe('<StatusPill />', () => {
  it('renders correctly', () => {
    const tree = mount(<Component {...props} />)
    expect(tree.debug()).to.matchSnapshot()
  })
})

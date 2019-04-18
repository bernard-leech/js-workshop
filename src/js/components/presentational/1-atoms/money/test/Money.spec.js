// @flow
import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import Component from '../Money'
import { props } from '../test/Money.mock'

describe('<Money />', () => {
  it(`renders correctly`, () => {
    const tree = mount(<Component {...props} />)
    expect(tree.debug()).to.matchSnapshot()
  })
})

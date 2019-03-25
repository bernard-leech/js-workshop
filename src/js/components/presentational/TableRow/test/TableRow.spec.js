// @flow

import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import Component from '../TableRow'
import { props } from '../test/TableRow.mock'

describe('<TableRow />', () => {
  const tree = mount(<Component {...props} />)

  it(`is exported in the library`, () => {
    const tree = shallow(<TestLibrary {...props} />)
    expect(tree).to.have.length(1)
  })

})

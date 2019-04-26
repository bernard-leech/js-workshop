import React from 'react'
import TestRenderer from 'react-test-renderer'

import { props } from '../test/DateTerm.mock'

import DateTerm, { getRelativeDay } from '../DateTerm'
import { max } from 'date-fns';

const dueTodayText = 'Due today'

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<DateTerm {...props} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test(`getRelativeDay() returns ${dueTodayText} when provided with todays date`, () => {
  const myDateTerm = new Date()
  expect(getRelativeDay(myDateTerm)).toBe(dueTodayText)
})

test(`getRelativeDay() returns 1 day left`, () => {
  const { date } = props

  const myDate = new Date(date)
  let yesterday = new Date(date)
  yesterday.setDate(myDate.getDate() - 1)

  expect(getRelativeDay(date, yesterday)).toBe("1 days left")
})

test(`getRelativeDay() returns "not a number", when provided with a string `, () => {
  const { date } = props
  expect(getRelativeDay(date, 'string')).toBe("0 days left")
})

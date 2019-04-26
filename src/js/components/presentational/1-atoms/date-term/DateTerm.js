// @flow
import React from "react"
import { format as formatFunc, differenceInCalendarDays } from 'date-fns'

export const getRelativeDay = (date, relativeDate = new Date()) => {
  const isRelativeDateANumber = (relativeDate instanceof Date)

  const dateDifference = isRelativeDateANumber ? differenceInCalendarDays(date, relativeDate) : '0'

  let output = `${dateDifference} days left`

  if (dateDifference === 0) {
    output = 'Due today'
  }

  if (dateDifference < 0) {
    output = `${Math.abs(dateDifference)} days late`
  }

  return output
}

function DateTerm(props) {
  const { date, format = 'D MMM YYYY', isRelative } = props
  
  const dateToDisplay = isRelative ? getRelativeDay(date) : formatFunc(date, format)

  return (
    <span className="date-container">{dateToDisplay}</span>
  )
}

export default DateTerm

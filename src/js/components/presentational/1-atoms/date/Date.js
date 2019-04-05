// @flow
import React from "react"
import { format as formatFunc, differenceInCalendarDays } from 'date-fns'

import type { DateTypes } from './DateTypes.types'

function Date(props: DateTypes) {
  const { date, format = 'D MMM YYYY', isRelative } = props

  const getRelativeDay: string = (date: string) => {
    const dateDifference = differenceInCalendarDays(date, new Date())
    let output = `${dateDifference} days left`

    if (dateDifference === 0) {
      output = 'Due today'
    }

    if (dateDifference < 0) {
      output = `${Math.abs(dateDifference)} days late`
    }

    return output
  }
  
  const dateToDisplay = isRelative ? getRelativeDay(date) : formatFunc(date, format)

  return (
    <span className="date-container">{dateToDisplay}</span>
  )
}

export default Date

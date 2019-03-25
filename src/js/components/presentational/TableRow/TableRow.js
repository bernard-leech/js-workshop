// @flow
import React from 'react'
import classNames from 'classnames'

import type { TableRowType } from './TableRow.types'

function TableRow (props: TableRowType) {
  const {
    heading,
    date,
    money,
    status,
    links
  } = props

  return (
    <div>
      {heading}
      {date}
      {money}
      {status}
    </div>
  )
}

export default TableRow

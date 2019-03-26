// @flow
import React from 'react'
// TODO: install classnames
// import classNames from 'classnames'

import type { TableRowType } from './TableRow.types'

function TableRow (props: TableRowType) {
  const {
    heading,
    money,
    date,
    status
  } = props
  return (
    <div>
      <div>{heading}</div>
      <div>{money}</div>
      <div>{date}</div>
      <div>{status}</div>
    </div>
  )
}

export default TableRow

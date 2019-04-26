// @flow
import React from 'react'

import StatusPill from '../../1-atoms/status-pill/StatusPill'

// import type { TableRowType } from './TableRow.types'

function TableRow (props) {
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
      <StatusPill status={status} children={status} />
    </div>
  )
}

export default TableRow

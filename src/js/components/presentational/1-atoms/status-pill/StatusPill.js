// @flow
import React from 'react'
import classNames from 'classnames'

// import type { StatusPillType } from './StatusPill.types'

function StatusPill (props) {
  const {
    status,
    children
  } = props

  const statusPillClasses = classNames('status-pill',
    {
      'status-pill--error': status === 'error',
      'status-pill--success': status === 'success'
    }
  )

  return (
    <div className={statusPillClasses}>
      {children}
    </div>
  )
}

export default StatusPill

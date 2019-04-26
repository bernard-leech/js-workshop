// @flow
import React from 'react'

// import type { MoneyType } from './Money.types'

function numberWithSeparator(number, separator) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

function Money (props) {
  const {
    moneyValue,
    currencySymbol = '£',
    separator = ',',
    decimal = '.'
  } = props
  
  const integerValue = Math.floor(moneyValue)
  const fractionalValue = Math.round((moneyValue - integerValue) * 100)
  const integerValueWithCommas = numberWithSeparator(integerValue, separator);
  
  const money = `${currencySymbol}${integerValueWithCommas}${decimal}${fractionalValue}`
  
  return (
    <div className='number' style={{fontVariantNumeric: 'tabular-nums', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'}}>
      {money}
    </div>
  )
}

export default Money

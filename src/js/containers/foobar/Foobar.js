import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../redux/foobar.redux'

const url = 'http://5826ed963900d612000138bd.mockapi.io/items'

const Foobar = props => {
  const { isError, isFetching, items, fetchData } = props

  useEffect(() => fetchData(url), [url])

  return (
    <>
      <p>I am Foobar</p>
      {isError && <p>Sorry! There was an error loading the items</p>}
      {isFetching && <p>Loading…</p>}
      <ul>{items && items.map(item => <li key={item.id}> {item.label} </li>)}</ul>
    </>
  )
}

const mapStateToProps = ({ asyncReducer: { items, isError, isFetching } }) => ({ items, isError, isFetching })
const mapDispatchToProps = dispatch => ({ fetchData: url => dispatch(fetchData(url)) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Foobar)

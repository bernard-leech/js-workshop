const initialState = {
  items: [],
  isFetching: false,
  isError: false
}

export const IS_ERROR = 'IS_ERROR'
export const IS_FETCHING = 'IS_FETCHING'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'

export const isError = bool => ({
  type: IS_ERROR,
  isError: bool
})

export const fetchDataSuccess = items => ({
  type: FETCH_DATA_SUCCESS,
  items
})

export const isFetching = bool => ({
  type: IS_FETCHING,
  isFetching: bool
})

export const fetchData = url => dispatch => {
  dispatch(isFetching(true))
  dispatch(isError(false))
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isFetching(false))
      dispatch(isError(false))
      return response
    })
    .then(response => response.json())
    .then(items => dispatch(fetchDataSuccess(items)))
    .catch(() => {
      dispatch(isFetching(false))
      dispatch(isError(true))
    })
}

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_ERROR:
      return {
        ...state,
        isError: action.isError
      }
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: action.items
      }
    default:
  }
  return state
}

export default asyncReducer

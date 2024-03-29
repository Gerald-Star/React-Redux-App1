/**
 * create the first reducer by importing the action type
 */

import * as ACTION_TYPES from '../actions/actions_types'

/**
 * set the variable initialState / this is the proper redux state
 */

const initialState = {
  stateprop1: false,
}

/**
 * set the rootReducer which is an arrow function to take
 * two params, and the default param -actions
 * 
 *Set up a switch case statement of action type
 if the  case  ACTION_TYPES.SUCCESS return true

 if the case ACTION_TYPES.FAILURE return false

 */
const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      
      return {
        ...state,
        stateprop1: true
      }
  
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateprop1: false
      }
    default: 
      return state
  }
}

export default Reducer1;
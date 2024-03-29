/**
 * create the first reducer by importing the action type
 */

import * as ACTION_TYPES from '../actions/actions_types'

/**
 * set the variable initialState / this is the proper redux state
 * 
 * ? STEP 11 
 * set the new user_input property user_text on initialState
 * ? STEP 12
 * create a new case statement  on the reducer to handle the type text
 * 
 * ? STEP 13
 * On the container, add additional button to handle the action type text
 */


const initialState = {
  stateprop1: false,
  user_text: ''
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
    
    /**
     * ! delete this reducer later and pass through a new file
     */
      /**
       * case ACTION_TYPES.USER_INPUT:  // create action file of USER-INPUT
        return {
        ...state,
        user_text: action.payload
      }
       * 
       */

    
    default: 
      return state
  }
}

export default Reducer1;
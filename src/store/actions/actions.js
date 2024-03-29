import * as ACTION_TYPES from './actions_types'

/**
 * Declare the action types
 */
export const SUCCESS = {
  type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
  type: ACTION_TYPES.FAILURE
}

/**
 * ? SETUP 7
 * 
 * Setup the actionCreator()
 * 
 * ! NEXT create 2 more buttons and set them to action_creator 1& 2 ON THE CONTAINER
 * ! Set the action_creator1 & 2 on the mapDispatchToProps action for SUCCESS AND FAILURE
 */

export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS
  }
}

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE
  }
}

/**
 * ? STEP 10
 * create a new action creators names USER_INPUT and pass in a param test
 * pass a second action called a payload
 * 
 * ? STEP 11
 * Update the reducer to handle this piece of state property on the initialState
 */

export const user_input = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT,
    payload: text
  }
}
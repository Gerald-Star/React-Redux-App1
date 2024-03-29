import React, { Component } from 'react';
/**
 * ? STEP 1
 * Import the ACTION_TYPES from the store
 * import the ACTIONs FROM actions
 */

import * as ACTION_TYPES from '../store/actions/actions_types'
import * as ACTIONS from '../store/actions/actions'
/**
 * ? STEP 3
 * import the {connect}
 */
import { connect } from 'react-redux';

/**
 * Set up a Class Component to test the redux
 * 
 * In React, containers that are away of their state is referred to as Containers
 * Only class based React Component will be aware of redux state. 
 * Functional components does not.
 */
class Container1 extends Component {


  /**
   * ? STEP 6
   * Setup the action function props inside the button
   */

  /**
   *  ? STEP 9
   * Setup the button with action_creators 1 & 2
   */
  render() {
    return (
      <div>
        <button onClick={() => console.log(this.props.stateprop1)}>Get State</button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        <button onClick={() => this.props.action_creators1()}>Dispatch Action Creators 1</button>
        <button onClick={() => this.props.action_creators2()}>Dispatch Action Creators 2</button>

      </div>
    );
  }
}

/**
 * ? STEP 2
 * Setup two functions to allow the use of react redux library to manage the state
 * mapStateProps(states)
 * mapDispatchPath(dispatch)
 * 
 */


function mapStateToProps(state) {
  return {
    stateprop1: state.stateprop1
  }
}

/**
 * ? STEP 5 
 * Pass in the action to the Dispatch method
 *  Setup the redux state inside the button React
 */

/**
 * ? STEP 8
 * Setup the action_creators 1 & 2 and call the success() & failure() functions 
 * inside the dispatch()
 * 
 */
function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creators1: () => dispatch(ACTIONS.success()),
    action_creators2: () => dispatch(ACTIONS.failure())


  }

}
/**
 * STEP 4
 * 
 * ! Connect() Method
 * ? Connect these two functions to React using the connect() at the top. 
 * ? Import it at the bottom of your file
 * ? set the connect()at the export default file and 
 * ? set mapStateProps and mapDispatchPath as params
 */

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
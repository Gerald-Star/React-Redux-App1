# React - Redux


## How to Update State in React Redux React-Redux

### Upate State

REACT
this.setState

REDUX
Dispatch actions to the reducer

REACT-REDUX
mapDispatchToProps()
this.props.dispatch_actions()
Then dispatch actions to the reducer.

### Read State

REACT this.state.state_property

REDUX store.getStore()

REACT-REDUX
mapStateToProps()
this.props.state_property


## CODE UPDATE

## mapStateToProps()

Enables how to get state from Redux
Property in the return statement is user defined
Set the value to 'state' (named of reducer if mre than one), (name of the property)
In the React render method use 'this.props' name of the property you set

## mapDispatchProps()

Changes the state by dispatching actions
This function modifies the state globally
Actions can be plain or async action creators
Actions can have an optional payload
If the value in the Action matches the case statement in the reducer, a new state is returned in the component and rendered automatically
To dispatch actions use the syntax 'this.props' (name of the property you set)

## Connect() Method: How does reducer knows what actions are being dispatched

The connect method connects react container with the redux store. 
The reducer knows what actions have been dispatched through the connect method
You import connect method at the top and use as the very last method

It is part of the react-redux library

## Scenarios to use the Connect() Method

### 1. Reads the Actions Container - mostly used

Pass the redux inside the connect()
connect(mapStateToProps, mapDispatchTo Props)(Container)

### 2. Read Only Container

Here, you don't want to pass in the actions rather only the state
connect (mapStateToProps)(Container)

### 3. Dispatch Actions Only Container

Here, you only want to pass in Actions without the props by setting null ..
connect(null, mapDispatchToProps)(Container)


## Setup the actionCreators() on the action file

action creators are  Javascript objects  that returns a standard objects
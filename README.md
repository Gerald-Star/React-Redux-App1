# What is Redux

Redux is a state management library, it is standalone library outdie react and can be used on other frontend frameworks such as Angular and Vue to make state management predictable and easily managed by using a few methods on how state can be updated

# What is React-Redux

## Why Redux

Enables updating of state management example, react state is one of the core concepts and state can be updated in the component in which it is initialized in.  

When we want to implement an authentication and would want all the component to interact to be aware of any update on the component like an authentication, it enables the message to pass down to the child component.

When the user logs out, it uodates the authentication on the parents compnents from that component to create a sort of global state where the state can be update and perisit to all other components

## Three Principles of Redux

### 1st Principle

There is only one source of truth

### 2nd Principle

State is read-only. We cant directly mutate the state but we can change the state. React state is updated in a special way

### 3rd Principle

Changes are made with pure function
This means that the final state produced are made from simple non asynchronous functions 


## Redux has to main parts

## 1. Actions in Redux

Actions is a javascript object that has a type property that is a string and it describes how the action will update the states and actions are passed into redux with the dispatch action function.

The dispatch function helps pass the action through the reducers under the hood and therefore we say ACTIONS ARE DISPATCHED- EXAMPLE OF ACTIONS IN LOGGING LIKE LOGIN SUCCESS THAT CHANGES A PROPERTY OF THE REDUCE STATE is called authenticated from false to true that signifies that a user has logged in.


Actions can hold any other property as well for passing data, adn the property is called payload and the data can be passed in as an argument to an action creator.


Actions is redux specific
can be dispatched from React
Describes what will happen to the state
Have a require type property
Can have any other optional properties

Taking a new state and returning a previous state is simply returning a new state, this is what is called asynchronous in complexity and has to be handled in the actions


## ACTION CREATORS

Can dispatch actions asynchronously
A function which dispatches a normal action
Allows for dynamic setting the payload property
No changes required to the reducer.


Action creators are functions that returns actions and they are not a separate building block of redux but instead just an alternate way to dispatch actions in their use.

If you want to save the user input to state you would set up a action creator with the arrow function.

## 2. Reducers

Reducers are setup as a switch case statement. In each case statement represents a single actions type each case statement must match an action type.

There must be a straight one to one relationships between actions in reducer case statement.

There can't be more actions that there are reducers case statement and vice versa when an action is dispatched.

When an action is dispatched it run through a reducer to see if there is a matching statement. If there is a matching action type in the reducer the reducer modifies the global state accordingly. This is done under the hood.

Reducers are not asynchronous they must simply r´take in the previous state and return a new state.

All the asynchronous actions are handled by dispatching actions for example the action logging type of success will automatically run through all the reducers.


## REUCER STATEUP

Setup the reducer at the index.js file to import all react dependencies.
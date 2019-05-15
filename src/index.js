import {createStore} from 'redux';
import todoApp from './reducer';
import {
  addToDo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './action'


const store = createStore(todoApp);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addToDo('Learn about actions'))
store.dispatch(addToDo('Learn about reducers'))
store.dispatch(addToDo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()


import { combineReducers } from "redux";

import {
  VisibilityFilters,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from "./action";

const SHOW_ALL = VisibilityFilters.SHOW_ALL;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
//we are not mutating the state
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          console.log("#####", todo.completed);
          //https://medium.com/@oprearocks/what-do-the-three-dots-mean-in-javascript-bc5749439c9a
          let a = Object.assign({}, todo, 
            {completed: !todo.completed}
          );
          console.log("aaaa", a.completed);
          return a;
        }
        return todo;
      });
  }
}

/**
 * 
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});
export default todoApp;
 */

export default function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}

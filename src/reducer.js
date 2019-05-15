import { combineReducers } from "redux";

import {
  VisibilityFilters,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from "./action";

const SHOW_ALL = VisibilityFilters.SHOW_ALL;

function visibilityFilter(state = SHOW_ALL, action)
{
  switch (action.type)
  {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action)
{
  switch(action.type){
    case ADD_TODO:
      return [
        ...state,
        {
          text:action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(index === action.index){
          Object.assign({}, todo, {
            completed: !todo.completed
          });
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

export default function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
 */

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

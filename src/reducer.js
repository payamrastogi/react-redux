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
  
}
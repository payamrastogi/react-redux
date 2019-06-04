import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  tech: "react"
};

export const store = createStore(reducer, initialState);

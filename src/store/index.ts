import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk" 
import {postsReducer} from "./posts/index";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));


import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postsReducer } from "./posts/index";

const rootReducer = combineReducers({
  postsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;

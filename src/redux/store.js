import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import loginReducer from './reducers/loginReducer';
import profileReducer from './reducers/profileReducer';


/**
 * Combining the reducers into one reducer.
 * 
 * @constant
 * @name rootReducer
 * @kind variable
 */
const rootReducer = combineReducers({
  loginReducer,
  profileReducer
});


/**
 * Creating a store with the rootReducer.
 * 
 * @constant
 * @name store
 * @kind variable
 */
const store = configureStore({reducer: rootReducer});

export default store;
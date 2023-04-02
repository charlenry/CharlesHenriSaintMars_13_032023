import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import loginReducer from './reducers/loginReducer';
import profileReducer from './reducers/profileReducer';

const rootReducer = combineReducers({
  loginReducer,
  profileReducer
});

const store = configureStore({reducer: rootReducer});

export default store;
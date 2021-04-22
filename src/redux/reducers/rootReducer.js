import { combineReducers } from 'redux';

import { notesReducer } from './notesReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
	notesReducer,
	appReducer,
})
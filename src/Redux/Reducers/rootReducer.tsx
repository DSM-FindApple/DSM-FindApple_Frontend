import React from 'react';
import { combineReducers } from 'redux';
import modalReducer from './Modal'

export const rootReducer = combineReducers({
    modalReducer
})

export type RootState = ReturnType<typeof rootReducer>

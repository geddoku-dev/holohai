import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({ auth: authReducer });

export const setupStore = () => {
    const store = configureStore({ reducer: rootReducer });

    return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

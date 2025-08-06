import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import projectReducer from "./features/project/projectSlice";
import pageReducer from "./features/page/pageSlice";
import alertReducer from "./features/alert/alertSlice"

const persistConfig = {
    key: 'root',
    storage
}
const persistedProjectReducer = persistReducer(persistConfig, projectReducer)
const persistedPageReducer = persistReducer(persistConfig, pageReducer)
const persistedAlertReducer = persistReducer(persistConfig, alertReducer)
export const store = configureStore({
    reducer: {
        /* The store now knows how to change the state of project and page*/
        project: persistedProjectReducer,
        page: persistedPageReducer,
        alert: persistedAlertReducer
    },
    //this is a temp middleware should this is not doing much. This is a place for SAGA or THUNK
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})
export const presistedStore = persistStore(store);

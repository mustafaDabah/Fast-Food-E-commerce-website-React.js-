import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ShopCartSlice  from './ReduxFeatures/CartSlice';
import UserSlice from "./ReduxFeatures/UserSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux"; 

const reducers = combineReducers({
    cart:ShopCartSlice,
    user:UserSlice
})

const persistConfig = {
    key:'root',
    storage,
    cart:['cart']
}

const persistedReducer = persistReducer(persistConfig , reducers)


export const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})
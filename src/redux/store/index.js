import { configureStore } from '@reduxjs/toolkit'
import { rootReducers } from '../slices/index'


export const store = configureStore({
    reducer: rootReducers,
    devTools: true
})
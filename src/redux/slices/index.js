import { combineReducers } from '@reduxjs/toolkit'
import { inventarioReducer } from './inventarioSlice'


export const rootReducers = combineReducers({
    inventario: inventarioReducer
})
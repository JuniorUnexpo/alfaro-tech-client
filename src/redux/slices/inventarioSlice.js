import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


/**
 * ****************** Obtener Inventario ****************** 
 */
const estadoInicial = {
    loading: false,
    success: false,
    results: []
}


export const obtenerInventario = createAsyncThunk('obtenerInventario', async (_, thunkAPI) => {    
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    return axios
        .get('http://localhost:5000/api/v1/inventario/obtener')
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.message))
})


const obtenerInventarioPendiente = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
    state.results = []
}

const obtenerInventarioSatisfactorio = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = ''
    state.results = payload?.results
}

const obtenerInventarioFallido = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message
    state.results = []
}


const inventarioSlice = createSlice({
    name: 'inventario',
    initialState: estadoInicial,
    extraReducers(builder){
        builder.addCase(obtenerInventario.pending, obtenerInventarioPendiente)
        builder.addCase(obtenerInventario.fulfilled, obtenerInventarioSatisfactorio)
        builder.addCase(obtenerInventario.rejected, obtenerInventarioFallido)
    }
})

export const inventarioReducer = inventarioSlice.reducer
export const inventarioSelector = state => state.inventario
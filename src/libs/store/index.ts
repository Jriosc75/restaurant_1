import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../counter/counterSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})

// Define RootState type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

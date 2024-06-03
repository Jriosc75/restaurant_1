import { createSlice } from '@reduxjs/toolkit'

interface StatusState {
    value: boolean
}

const initialState: StatusState = {
    value: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.value = true
        },
        logOut: (state) => {
            state.value = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { logOut, login } = authSlice.actions

export default authSlice.reducer

import { createSlice } from "@reduxjs/toolkit";
/**
 * @name alertSlice
 * @returns returns actions and the reducer for alert - am alert bubble to show logs/errors.
 */
export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        alertDisplay: false,
        alertTopic: '',
        alertText: '',
    },
    reducers: {
        showAlert: (state, action) => {
            state.alertDisplay = action?.payload?.alertDisplay
            state.alertTopic = action?.payload?.alertTopic
            state.alertText = action?.payload?.alertText
        }
    }
})

export const {
    showAlert } = alertSlice.actions
export default alertSlice.reducer

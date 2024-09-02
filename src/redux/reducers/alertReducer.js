import { createSlice } from "@reduxjs/toolkit";
// Import the actions from the slice or module where they are defined
import { startTimer, pauseTimer, resetTimer } from "./timerReducer";

const INITIAL_STATE = { message: null };

// Create alert slice to handle timer actions
const alertSlice = createSlice({
    name: "alert",
    initialState: INITIAL_STATE,
    reducers: {
        reset: (state) => {
            state.message = null;	
        }
    },
    extraReducers: (builder) => {
        builder.addCase(startTimer, (state) => {
            state.message = "Time has started";
        })
        .addCase(pauseTimer, (state) => {
            state.message = "Timer is paused";
        })
        .addCase(resetTimer, (state) => {
            state.message = "Timer set to 0";
        });
    }
});

// Export the alert reducer function
export const alertReducer = alertSlice.reducer;

// Export the reset action
export const { reset } = alertSlice.actions;

// Create and export alert selector function
export const alertSelector = (state) => state.alertReducer.message;

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./redux/reducers/counterReducer";
import { timerReducer } from "./redux/reducers/timerReducer";
import { alertReducer } from "./redux/reducers/alertReducer";

export const store = configureStore({
    reducer: {
        counterReducer,
        timerReducer,
        alertReducer
    }
});

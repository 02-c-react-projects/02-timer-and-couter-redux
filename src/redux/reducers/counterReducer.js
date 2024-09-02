import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { count: 0 };

// define counter reducer function here
const counterSlice = createSlice({
    name: "counter",
    initialState: INITIAL_STATE,
    reducers: {
        incrementCounter: (state) => {
            state.count = state.count + 1;
        },
        decrementCounter: (state) => {
            state.count = state.count - 1;
        },
        resetCounter: (state) => {
            state.count = 0;
        },
    },
})


export const counterReducer = counterSlice.reducer;
export const { incrementCounter, decrementCounter, resetCounter } = counterSlice.actions
// export const counterReducer = (state=INITIAL_STATE, action) => {
//     switch (action.type) {
//         case INCREMENT_COUNTER:
//             return { ...state, count: state.count + 1 };
//         case DECREMENT_COUNTER:
//             return { ...state, count: state.count - 1 };
//         case RESET_COUNTER:
//             return { ...state, count: 0 };
//         default:
//             return state;
//     }
// }

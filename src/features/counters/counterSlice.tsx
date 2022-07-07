import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// export interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state: any) => {
//       state.value += 1;
//     },
//     decrement: (state: any) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state: any, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export const incrementAsync = (amount: number) => (dispatch: (arg0: { payload: number; type: string }, arg1: number) => void) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount), 1000);
//   });
// };

// export const selectCount = (state: any) => state.counter.value;

// export default counterSlice.reducer;

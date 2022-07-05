import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counters/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
//Suy ra Types `RootState` và` AppDispatch` từ store
export type RootState = ReturnType<typeof store.getState>;
// Suy ra type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

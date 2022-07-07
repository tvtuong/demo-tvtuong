import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { v4 as uuidv4 } from 'uuid';
import { BookState } from '../type';

type initialStateType = {
  bookList: BookState[];
};

const bookList: BookState[] = [
  {
    id: uuidv4(),
    title: '1984',
    author: 'George Orwell',
  },
  {
    id: uuidv4(),
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J. K. Rowling',
  },
  {
    id: uuidv4(),
    title: 'The Lord of the Rings',
    author: 'J.R.R Tolkien',
  },
];

const initialState: initialStateType = {
  bookList,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addNewBook: (state: any, action: PayloadAction<BookState>) => {
      state.bookList.push(action.payload);
    },
    updateBook: (state: any, action: PayloadAction<BookState>) => {
      const {
        payload: { title, id, author },
      } = action;

      state.bookList = state.bookList.map((book: BookState) => {
        book.id === id ? { ...book, author, title } : book;
      });
    },
    deleteBook: (state: any, action: PayloadAction<{ id: string }>) => {
      state.bookList = state.bookList.filter((book: BookState) => book.id !== action.payload.id);
    },
  },
});

export const { addNewBook, updateBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;

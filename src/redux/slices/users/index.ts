import { createSlice } from '@reduxjs/toolkit'
import { UsersState } from './types'
import * as reducers from "./reducers";

const initialState: UsersState = {
  entries: [
    {
      id: 0,
      name: "John Doe",
      username: "FluffyJohn",
      email: "john@doe.org",
      city: "Neverland"
    },
    {
        id: 1,
        name: "John Doe",
        username: "FluffyJohn1",
        email: "john1@doe.org",
        city: "Neverland"
    },
    {
        id: 2,
        name: "John Doe",
        username: "FluffyJohn2",
        email: "john2@doe.org",
        city: "Neverland"
    },
    {
        id: 3,
        name: "John Doe",
        username: "FluffyJohn3",
        email: "john3@doe.org",
        city: "Neverland"
    }
  ]
}

export const slice = createSlice({
  name: "users",
  initialState,
  reducers
})

export const reducer = slice.reducer;
export const actions = slice.actions;

export default slice;

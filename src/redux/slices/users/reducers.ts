import { PayloadAction } from "@reduxjs/toolkit";
import { UserData, UsersState } from "./types";

export function addUser(state: UsersState, action: PayloadAction<UserData>) {
    state.entries.push(action.payload);
}

export function removeUser(state: UsersState, action: PayloadAction<UserData>) {
    removeUserWithId(state, { ...action, payload: action.payload.id });
}

export function removeUserWithId(state: UsersState, action: PayloadAction<UserData["id"]>) {
    const serial = state.entries.findIndex(entry => entry.id === action.payload);

    if (serial >= 0) state.entries.splice(serial, 1);
}
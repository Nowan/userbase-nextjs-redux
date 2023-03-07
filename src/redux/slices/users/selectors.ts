import { AppState } from "../../store";
import { UsersState } from "./types";

export function selectEntries(state: AppState): UsersState["entries"] {
    return selectSlice(state).entries;
}

export function selectSlice(state: AppState): UsersState {
    return state.users;
}
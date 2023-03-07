export interface UserData {
    id: number,
    name: string,
    username: string,
    email: string,
    city: string
};

export interface UsersState {
    entries: Array<UserData>
}
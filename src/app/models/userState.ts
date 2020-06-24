import { User } from './user';

export default class UserState {
    users: Array<User>;
    userError: Error;
}

export const initializeState = (): UserState => {
    return { users: Array<User>(), userError: null };
};

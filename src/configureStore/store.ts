import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";


export interface RootState {
    user: {
        name: string;
        avatar: string
    }
    stats: {
        followers: number;
        following: number;
    };
}


const initialState: RootState = {
    user: {
        name: 'MP',
        avatar: 'https://gravatar.com/avatar/000?d=mp'
    },
    stats: {
        followers: 0,
        following: 0
    }
};


export const store = createStore(rootReducer, initialState);
import { changeUserAction } from "../utils/utils";
import { CHANGE_AVATAR, CHANGE_NAME } from "../actions/userAction";


const defaultState = {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
}

export const userReducer = (state = defaultState, action: changeUserAction) => {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.payload || state.name };
        case CHANGE_AVATAR:
            return { ...state, avatar: action.payload || state.avatar };
        default:
            return state;
    }
}
import { CHANGE_STATS } from "../actions/statsAction";
import { ChangeStatsAction } from "../utils/utils";

const defaultState = {
    followers: 0,
    following: 0
}


export const statsReducer = (state = defaultState, action: ChangeStatsAction) => {
    switch (action.type) {
        case CHANGE_STATS:
            let res = state[action.payload.statsType] + action.payload.sum;
            res = res < 0 ? 0 : res;
            return { ...state, [action.payload.statsType]: res };
        default:
            return state;
    }
}
import { CHANGE_STATS } from "../actions/statsAction";
import { CHANGE_AVATAR, CHANGE_NAME } from "../actions/userAction";

export interface AvatarProps {
  size?: 'small'
}

export interface ChangeStatsAction {
  type: typeof CHANGE_STATS;
  payload: {
    statsType: 'followers' | 'following';
    sum: number;
  };
}

type UserActionType = typeof CHANGE_NAME | typeof CHANGE_AVATAR;

export interface changeUserAction {
  type: UserActionType,
  payload: {
    name: string,
    avatar: string,
  }
}
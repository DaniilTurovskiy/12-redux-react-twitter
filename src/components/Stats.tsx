import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from './Avatar'
import {changeStats} from '../actions/statsAction';
import { statsReducer } from '../reducer/statsReducer';
import { RootState } from '../configureStore/store';




const Stats = () => {
    const {followers, following} = useSelector((state: RootState) => state.stats);
    const name = useSelector((state: RootState) => state.user.name);
    const dispatch = useDispatch();

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
            <div
                    onClick={() => dispatch(changeStats('followers', 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats('followers', -1));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(changeStats('following', 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats('following', -1));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    )
}

export default Stats
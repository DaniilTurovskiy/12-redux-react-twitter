import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar, changeName } from '../actions/userAction'
import { RootState } from '../configureStore/store';
import { AvatarProps } from '../utils/utils';

const Avatar: React.FC<AvatarProps> = ({ size }) => {
    const { name, avatar } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch()
    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                dispatch(changeName(name));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    )
}

export default Avatar
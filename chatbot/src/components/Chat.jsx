import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NoProfile from '../assets/img/no-profile.png';
import Ryusuke from '../assets/img/kairyu.png';

const Chat = (props) => {

    const isQuestion = (props.type === 'question');

    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={Ryusuke} />
                ) : (
                    <Avatar alt="icon" src={NoProfile} />
                )}
            </ListItemAvatar>
            <div className='p-chat__bubble'>
                {props.text}
            </div>
        </ListItem>
    )
}

export default Chat;
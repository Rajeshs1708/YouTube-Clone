import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@mui/material';
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

function ChannelRow({image,channel,subs,noOfVideos,description,verified}) {
  return (
    <div className='channelRow'>
        <Avatar className="channelRow__logo" alt={channel} src={image} />
        <div className='channelRow__text'>
            <h4>{channel}{verified && <CheckCircleOutlineOutlined/>}</h4>
            <p>{subs} subscribers . {noOfVideos} videos</p>
            <p>{description}</p>
        </div>
      
    </div>
  )
}

export default ChannelRow

import React from 'react';
import './sidebar.css';
import SidebarRow from './SidebarRow';
import { History, ExpandMoreOutlined, Home, OndemandVideo, Subscriptions, ThumbUpAltOutlined, VideoLibrary, WatchLater, Whatshot } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={Home} title='Home' />
      <SidebarRow Icon={Whatshot} title='Trending' />
      <SidebarRow Icon={Subscriptions} title='Subscription' />
      <hr />
      <SidebarRow Icon={VideoLibrary} title='Library' />
      <SidebarRow Icon={History} title='History' />
      <SidebarRow Icon={OndemandVideo} title='Your videos' />
      <SidebarRow Icon={WatchLater} title='Watch Later' />
      <SidebarRow Icon={ThumbUpAltOutlined} title='Liked videos' />
      <SidebarRow Icon={ExpandMoreOutlined} title='Show more' />
    </div>
  )
}

export default Sidebar

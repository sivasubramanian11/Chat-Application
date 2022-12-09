import React from 'react';
import { Divider } from 'rsuite';
import CreateRoomButton from './Dashboard/CreateRoomButton';


import DashboardToggle from './Dashboard/DashboardToggle';
import ChatRoomList from './Dashboard/rooms/ChatRoomList';

const Sidebar = () => {
  return (
    <div className='h-100 pt-2'>
        <div>
        <DashboardToggle />
        <CreateRoomButton />
        <Divider>
          Join the conversation
        </Divider>
        </div>
        <ChatRoomList />
    </div>
  )
}

export default Sidebar
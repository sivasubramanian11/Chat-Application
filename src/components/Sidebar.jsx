import React from 'react';
import CreateRoomButton from './Dashboard/CreateRoomButton';


import DashboardToggle from './Dashboard/DashboardToggle';

const Sidebar = () => {
  return (
    <div className='h-100 pt-2'>
        <div>
        <DashboardToggle />
        <CreateRoomButton />
        
        </div>
        bottom
    </div>
  )
}

export default Sidebar
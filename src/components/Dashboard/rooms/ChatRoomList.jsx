import React from 'react'
import { Nav } from 'rsuite'
import RoomItem from './RoomItem';

const ChatRoomList = () => {
  return (
   <Nav 
   appearance='subtle'
   verticalreversed
   className='overflow-y-scroll'>
    <Nav.Item>
        <RoomItem />
    </Nav.Item>

   </Nav>
  )
}

export default ChatRoomList
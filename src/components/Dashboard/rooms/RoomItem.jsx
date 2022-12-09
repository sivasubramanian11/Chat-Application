import React from 'react';
import TimeAgo from 'timeago-react';

const RoomItem = () => {
  return (
    <div>
        
        <div>
            <h3 className="d-flex justify-content-between align-items-center">Room Name</h3>
            <TimeAgo
          datetime={new Date()}
          />
        </div>

        <div>
            <span>No messages yet</span>
        </div>
    </div>
  )
}

export default RoomItem
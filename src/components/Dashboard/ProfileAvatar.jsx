import React from 'react'
import { Avatar } from 'rsuite'
import { getNameInitials } from '../../misc/helper'

const ProfileAvatar = ({name,...avatarprops}) => {
  return (
   <Avatar circle {...avatarprops}>
    {getNameInitials(name)}
   </Avatar>
  )
}

export default ProfileAvatar
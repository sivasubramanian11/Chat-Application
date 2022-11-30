import React from 'react'
import { Button, Drawer, Icon } from 'rsuite'
import { useModal } from '../../misc/Customhooks';
import Dashboard from '.';

const DashboardToggle = () => {
  const {isOpen, open, close} = useModal();
  return (
    <>
    <Button block color='blue' onClick={open}>
        <Icon icon='dashboard'/> Dashboard
    </Button>
    <Drawer show={isOpen} onhide={close} position="left">
      <Dashboard />
    </Drawer>
    </>
  )
}

export default DashboardToggle
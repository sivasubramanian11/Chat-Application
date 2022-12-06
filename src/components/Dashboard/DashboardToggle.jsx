import React, { useCallback } from 'react'
import { Alert, Button, Drawer, Icon } from 'rsuite'
import { useMediaQuery, useModal } from '../../misc/Customhooks';
import Dashboard from '.';
import { auth } from '../../misc/Firebase';

const DashboardToggle = () => {
  const {isOpen, open, close} = useModal();
  const isMobile = useMediaQuery('(max-width:992px)');
  const OnSignOut= useCallback(()=>{
    auth.signOut();

    Alert.info('Signed Out', 4000);
    close();
    
  },[close])

  return (
    <>
    <Button block color='blue' onClick={open}>
        <Icon icon='dashboard'/> Dashboard
    </Button>
    <Drawer full={isMobile} show={isOpen} onHide={close} position="left">
      <Dashboard OnSignOut={OnSignOut} />
    </Drawer>
    </>
  )
}

export default DashboardToggle
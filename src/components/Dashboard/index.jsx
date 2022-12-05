import React from 'react'
import { Drawer, Button } from 'rsuite'
import { useProfile } from '../../context/Profile.context';


const Dashboard = ({OnSignOut}) => {

    const {profile}= useProfile();
    return (
        <>
        <Drawer.Header>
            <Drawer.Title>
                Dashboard
            </Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
            <h3> hey, {profile.name}</h3>
        </Drawer.Body>

        <Drawer.Footer>
            <Button block color="red" onClick={OnSignOut}>
                Signout
            </Button>
        </Drawer.Footer>
        </>
    )
}

export default Dashboard
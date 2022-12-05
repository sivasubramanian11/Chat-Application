import React from 'react'
import { Drawer, Button, Divider } from 'rsuite'
import { useProfile } from '../../context/Profile.context';
import EditableInput from './EditableInput';


const Dashboard = ({OnSignOut}) => {

    const {profile}= useProfile();
    const onSave= async(newdata)=>{
        // eslint-disable-next-line no-console
        console.log(newdata)
    };
    return (
        <>
        <Drawer.Header>
            <Drawer.Title>
                Dashboard
            </Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
            <h3> hey, {profile.name}</h3>
            <Divider />
            <EditableInput 
            name="nickname"
            initialValue={profile.name}
            onSave={onSave}
            label={<h3 className="mb-2">Nickname</h3>}


            />
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
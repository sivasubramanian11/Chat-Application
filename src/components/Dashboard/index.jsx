import React from 'react'
import { Drawer, Button, Divider, Alert } from 'rsuite'
import { useProfile } from '../../context/Profile.context';
import EditableInput from './EditableInput';
import { database } from '../../misc/Firebase';


const Dashboard = ({OnSignOut}) => {

    const {profile}= useProfile();

    const onSave= async(newdata)=>{
        const nickNameRef = database.ref(`profile/${profile.uid}`).child('name');

    try {
      await nickNameRef.set(newdata);
    Alert.info("Nickaname has been updated", 4000)
        } catch (error) {
    Alert.info(error.message)
     }
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
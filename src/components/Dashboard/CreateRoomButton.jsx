import React, { useCallback, useRef, useState } from 'react'
import { Button, ControlLabel, FormControl, FormGroup, Form, Icon, Modal, Schema, Alert } from 'rsuite';
import firebase from 'firebase/app';
import { database } from '../../misc/Firebase';
import { useModal } from '../../misc/Customhooks';


// const {StringType} = Schema.Types;

// const model = Schema.Model({
//         name:StringType().isRequired('Chat name is required'),
//         description: StringType().isRequired('Description is required')
//     });

// const INITIAL_VALUE={
//     name :'',
//     description : ''

//  }

// export const CreateRoomButton = () => {

//     const {isOpen,open, close} = useModal();
//     const [formValue, setFormValue] = useState(INITIAL_VALUE);
//     const [isLoading, setIsLoading] = useState(false);
//     const formRef = useRef();

//     const onFormChange = useCallback(value=>{
//         setFormValue(value);
//     },[])

//     const onFormSubmit= async ()=>{

//         if (!formRef.current.check()){
//             return;
//         }
//         setIsLoading(true);

//         const newRoomData={
//             ...formValue,
//             CreatedAt: firebase.database.ServerValue.TIMESTAMP
//         };

//         try {
//             await database.ref('rooms').push(newRoomData)

//             Alert.info(`${formValue.name} chat room has been created`,4000);
//             setIsLoading(false);
//             setFormValue(INITIAL_VALUE)
//             close();
//         } catch (error) {
//     setIsLoading(false)
//             Alert.error(error.message, 4000)
//         }

//     }


//   return (
//     <div >
//         <Button block color="green"  className="mt-2" onClick={open}>
//             <Icon icon="creative" />
//             Create new chat room
//         </Button>

//         <Modal show={isOpen} onHide={close}>
//             <Modal.Header>
//                 <Modal.Title>
//                      New chat room
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form  
//                   fluid 
//                    onClick={onFormChange} 
//                          formValue={formValue }
//                             model={model}
//                           ref={formRef} >

//                     <FormGroup>
//                         <ControlLabel>Room Name</ControlLabel>
//                         <FormControl name="name"
//                          placeholder="Enter chat room name..." />

//                         <ControlLabel>Description</ControlLabel>
//                         <FormControl
//                          componentClass="textarea"
//                          row={5}
//                          name="description" 
//                          placeholder="Enter description..." />
//                     </FormGroup>
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                <Button block color="blue" onClick={onFormSubmit} disabled={isLoading}>
//                 Create new chat room
//                </Button>
//             </Modal.Footer>
//         </Modal>
//     </div>
//   )
// }




const { StringType } = Schema.Types;

const model = Schema.Model({
    name: StringType().isRequired('Chat name is required'),
    description: StringType().isRequired('Description is required'),
});

const INITIAL_FORM = {
    name: '',
    description: '',
};

const CreateRoomButton = () => {
    const { isOpen, open, close } = useModal();

    const [formValue, setFormValue] = useState(INITIAL_FORM);
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();

    const onFormChange = useCallback(value => {
        setFormValue(value);
    }, []);

    const onSubmit = async () => {
        if (!formRef.current.check()) {
            return;
        }

        setIsLoading(true);

        const newRoomdata = {
            ...formValue,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
        };

        try {
            await database.ref('rooms').push(newRoomdata);

            Alert.info(`${formValue.name} has been created`, 4000);

            setIsLoading(false);
            setFormValue(INITIAL_FORM);
            close();
        } catch (err) {
            setIsLoading(false);
            Alert.error(err.message, 4000);
        }
    };

    return (
        <div className="mt-1">
            <Button block color="green" onClick={open}>
                <Icon icon="creative" /> Create new chat room
            </Button>

            <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>New chat room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        fluid
                        onChange={onFormChange}
                        formValue={formValue}
                        model={model}
                        ref={formRef}
                    >
                        <FormGroup>
                            <ControlLabel>Room name</ControlLabel>
                            <FormControl name="name" placeholder="Enter chat room name..." />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Description</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                rows={5}
                                name="description"
                                placeholder="Enter room description..."
                            />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        block
                        appearance="primary"
                        onClick={onSubmit}
                        disabled={isLoading}
                    >
                        Create new chat room
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateRoomButton;
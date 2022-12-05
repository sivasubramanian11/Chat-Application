/* eslint-disable jsx-a11y/label-has-associated-control */

import React,{useState, useRef}from 'react'
import { Modal, Button, Alert } from 'rsuite';
import AvatarEditor from 'react-avatar-editor';
import { useModal } from '../../misc/Customhooks';
import { storage, database } from '../../misc/Firebase';
import { useProfile } from '../../context/Profile.context';


const acceptedFileType =['image/jpeg', 'image/png', 'image/pjpeg'];
const validfile = (file)=>acceptedFileType.includes(file.type);


const AvatarUploadBtn = () => {
    const filetype="jpeg, png, jpg";
    const {isOpen, open, close} = useModal();
    const avatarEditorRef = useRef();
    const {profile} = useProfile();

    
    const [img,setImg] =useState(null);

    const onFileInputChange=(ev)=>{
        const currfile= ev.target.files;

        if(currfile.length === 1){
              
              const file = currfile[0];
              if(validfile(file)){
                setImg(file);
                open();
              }
        }
        else{
            Alert.warning(`unsupported file`,4000)
        }
    }
    const getBlob =(canvas)=>{
        return new Promise((resolve,reject)=>{
           canvas.toBlob((blob)=>{
            if(blob){
                resolve(blob);
            }
            else{
                reject(new Error('File processing error'))
            }
           })
        })
    }

    const onUploadClick= async()=>{
        const canvas = avatarEditorRef.current.getImageScaledToCanvas();

        try {
            const blob = await getBlob(canvas);

            const avatarFileRef=storage.ref(`profile/${profile.uid}`).child('Avatar');

            const uploadAvatarResult=await  avatarFileRef.put(blob,{
                cacheControl:`public max-age={3600*24*3}`
            });

            const downloadUrl = await uploadAvatarResult.ref.getDownloadURL();

            const userAvatarref = database.ref(`profile/${profile.uid}`).child('Avatar');

            await userAvatarref.set(downloadUrl);

            Alert.info("Avatar has been uploaded");


            
        } catch (error) {
            Alert.error(error.message,5000)
        }
    }

  return (
    <div className='mt-3 text-center'>
        <div>
        <label 
        htmlFor="Avatar-upload"
        className='d-block cursor-pointer padded'>
        select new Avatar
            <input
             id="Avatar-upload"
             type="file"
             className='d-none'
             accept={filetype}
             onChange={onFileInputChange}
            />

            <Modal show={isOpen} onHide={close}>
            <Modal.Header>
                <Modal.Title>
                    Preview and Upload new Avatar
                </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <div className="d-flex justify-content-center align-items-center h-100">
                    {img && (
                    <AvatarEditor
                    ref={avatarEditorRef}
                     image={img}
                     width={100}
                     height={100}
                     border-radius={100}
                />)}
                
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button block color="green" appearance='ghost' onClick={onUploadClick}>
                        Upload new avatar
                    </Button>
                </Modal.Footer>
            </Modal>
        </label>
        </div>
    </div>
  )
}

export default AvatarUploadBtn
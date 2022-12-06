import React, { createContext, useContext, useEffect, useState } from "react";
import 'firebase/app';
import {auth, database} from '../misc/Firebase';


const ProfileContext = createContext();

export const ProfileProvider=({children})=>{

 const [profile,setProfile] = useState(null);
 const [IsLoading, setIsLoading] = useState(true);

useEffect(()=>{
    let userRef;
    const authUnSub = auth.onAuthStateChanged(authObj=>{
        if(authObj){
            userRef =database.ref(`profile/${authObj.uid}`);
            userRef.on('value', snap=>{
                const {name,createdAt,avatar} = snap.val();
                const data={
                    name,
                    createdAt,
                    avatar,
                    uid:authObj.uid,
                    email:authObj.email
                }
                setProfile(data);
                setIsLoading(false);
            })
        }
        else{
            if(userRef){
                userRef.off();
            }
            setProfile(null);
            setIsLoading(false);
        }
        // if(IsLoading){
        //     // eslint-disable-next-line no-console
        //     console.log('.')
        // }
    })
return ()=>{
    authUnSub();
    if(userRef){
        userRef.off();
    }
}
},[IsLoading])

 return ( 
 
 <ProfileContext.Provider value={{ IsLoading, profile}}> 
    {children}
 </ProfileContext.Provider>
 );
};

export const useProfile =()=>useContext(ProfileContext)
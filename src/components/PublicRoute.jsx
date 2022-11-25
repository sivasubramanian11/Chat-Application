import React from 'react'
import { Redirect, Route } from 'react-router';


const PublicRoute = ({children, ...restprops}) => {
    const profile = false;
    if(profile){
        return <Redirect to="/" />
    }
  return (
    <Route {...restprops}>
        {children}
    </Route>
  )
}

export default PublicRoute
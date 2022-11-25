import React from 'react'
import { Redirect, Route } from 'react-router';


const PrivateRoute = ({children, ...restprops}) => {
    const profile = false;
    if(!profile){
        return <Redirect to="/signin" />
    }
  return (
    <Route {...restprops}>
        {children}
    </Route>
  )
}

export default PrivateRoute
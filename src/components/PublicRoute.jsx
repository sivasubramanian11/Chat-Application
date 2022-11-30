import React from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/Profile.context';


const PublicRoute = ({children, ...restprops}) => {
  const {profile, IsLoading} = useProfile();

  if(IsLoading && !profile){
    <Container>
      <Loader value="loading" speed ="slow" vertical content="Loading"/>
      </Container>
  }
    if(profile && !IsLoading){
        return <Redirect to="/" />
    }
  return (
    <Route {...restprops}>
        {children}
    </Route>
  )
}

export default PublicRoute
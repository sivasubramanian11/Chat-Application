import React from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/Profile.context';


// const PrivateRoute = ({children, ...restprops}) => {
// const {profile, IsLoading} = useProfile();

//     if(IsLoading && !profile){
//       <Container>
//         <Loader center speed="slow" content="Loading" vertical />
//         </Container>
//     }

//     if(!profile && !IsLoading){
//         return <Redirect to="/signin" />
//     }

//   return (
//     <Route {...restprops}>
//         {children}
//     </Route>
//   )
// }

// export default PrivateRoute

const PrivateRoute = ({ children, ...routeProps }) => {
  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (!profile && !isLoading) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
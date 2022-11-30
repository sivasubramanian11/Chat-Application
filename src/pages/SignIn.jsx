// import React from 'react';
// import firebase from 'firebase/app';
// import { Alert, Button, Col, Container, Grid, Row, Panel, Icon } from 'rsuite';
// import { auth, database } from '../misc/Firebase';


// // To fetch signed user details and store in firebase db
// const SignIn = () => {
//   const SignInWithProvider = async (provider) => {
//     try {
//       const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
//       if (additionalUserInfo.isNewUser) {
//         await database.ref(`/profiles/${user.uid}`).set({
//           name: user.displayName,
//           createdAt: firebase.database.ServerValue.TIMESTAMP
//         })
//       }
//       Alert.success("Signed In", 4000)
//     } catch (err) {
//       Alert.error(err.message,4000)
//     }
//   }

//   // Google sign in function
//   const OnGoogleSignIn = () => {
//     SignInWithProvider(new firebase.auth.GoogleAuthProvider());
//   }

//   return (
//     <Container >
//       <Grid className="mt-page">
//         <Row>
//           <Col xs={24} md={12} mdOffset={6}>
//             <Panel>
//               <div className="text-center">
//                 <h2>Welcome to Chat Platform</h2>
//                 <p>Progressive chat application for  folks</p>
//               <div className="mt-3" >
//                 <Button block color="green" className='text-center' type="button" onClick={OnGoogleSignIn}>
//                 <Icon icon="google" />  Continue with Google
//                 </Button>
//                 </div>
//               </div>
//             </Panel>
//           </Col>
//         </Row>
//       </Grid>
//     </Container>
//   )
// }

// export default SignIn


import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Row, Panel, Col, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/Firebase';

const SignIn = () => {
  const signInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profile/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      Alert.success('Signed in', 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>

              <div className="mt-3">
                <Button block color="green" onClick={onGoogleSignIn}>
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
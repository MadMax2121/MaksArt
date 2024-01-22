import React, { useContext } from 'react';
//import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { AuthContext} from './AuthContext'

function ProfileInfo() {
  const { setCurrentUser, currentUser} = useContext(AuthContext); // If you're managing the current user in context

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null); // Update the context if you're managing the current user
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <main>
    <h1>Hello, {currentUser.displayName}!</h1>
    <button onClick={handleLogout}>Logout</button>
    </main>
  );
};

export default ProfileInfo;

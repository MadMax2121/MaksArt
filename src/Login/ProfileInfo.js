import React, { useContext, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { AuthContext } from './AuthContext'
import "./ProfileInfo.css"

function ProfileInfo() {
    const { setCurrentUser, currentUser } = useContext(AuthContext); // If you're managing the current user in context
    const [profile_picture, setProfile_picture] = useState("/login/no-profile-picture-15255.png");

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setCurrentUser(null); // Update the context if you're managing the current user
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <main style = {{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <h1 >Profile Information</h1>
            <div className='profile_info_main'>
                
                <img src={(currentUser.photoURL) ? currentUser.photoURL : "/login/no-profile-picture-15255.png"} alt=""/>
                <div className='user_info'>
                    <p><b>Name:</b> {currentUser.displayName}</p>
                    <p><b>Email:</b> {currentUser.email} </p>
                    <button onClick={handleLogout}>Logout</button>

                </div>
                
            </div>
        </main>
    );
};

export default ProfileInfo;

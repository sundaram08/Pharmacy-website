import React from 'react'
import { useSelector} from 'react-redux'
import LoginSignup from '../LoginSignup/LoginSignup'
import Profile from './Profile';
 
function User() {
    const activeUser = useSelector((state) => state.user.userData);
  return (
    <div> 

{activeUser ? (
        <div>
          <Profile/>
        </div>
      ) : (
        <div>
          <div>
            <h2>
              <LoginSignup/>
            </h2>
          </div>
        </div> )}
    </div>
  )
}

export default User
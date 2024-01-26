import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import authService from '../../appwrite/authenticate';
import { logout } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const activeUser = useSelector((state) => state.user.userData);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
        navigate('/user')
    }
    return (
        <div className='pl-3 pt-3'>
            <div>
                <h2 className='text-3xl'>Hey {activeUser.name}</h2>
            </div>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
      );
}

export default Profile

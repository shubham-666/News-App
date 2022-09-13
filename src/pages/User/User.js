import React from 'react'
import SideBar from '../../components/Sidebar'
import { useContext } from 'react';
import { AppContext } from '../../context';
import Card from './Card'
const User = () => {
    const {user}=useContext(AppContext)
    return (
        <div >
            <SideBar/>
            <Card name={user.name} bio={user.bio}/>
        </div>
    )
}

export default User

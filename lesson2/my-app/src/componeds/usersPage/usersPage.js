import React from "react";
import User from '../User/User';
import UsersList from '../usersList/usersList';

function UsersPage() {

        const user ={
        name: 'Guliza',
        age: 17,
        lastName: 'Amanbekova'
    }

    const names = ["Guliza", 'Eliza']

    return (
        <div>
            <h1>Users List</h1>
            <User userInfo={user}/>
            <UsersList nameList={names}/>
        </div>
    )
}


export default UsersPage;
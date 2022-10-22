import React from "react";

function User(props) {
    console.log(props)
    return (
        <div>
            <p>name:{props.userInfo.name}</p>
            <p>lastName:{props.userInfo.lastName}</p>
            <p>age:{props.userInfo.age}</p>
        </div>
    )
}

export default User;
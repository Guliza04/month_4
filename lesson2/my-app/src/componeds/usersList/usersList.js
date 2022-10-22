import React from "react";

function UsersList(props) {
    console.log(props)
    return(

       <ul>
           {
               props.nameList.map(user => <li>{user}</li>)
           }
       </ul>
    )
}

export default UsersList;
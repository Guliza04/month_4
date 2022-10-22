import React from 'react';
import classes from './NewPage.module.css'

function NewPage(props) {

    return (
        <div>
            <h1 className={classes.title}>New Page</h1>
            <ul>
                <li>name: {props.user.name}</li>
                <li>age: {props.user.age}</li>
            </ul>
        </div>
    );
}

export default NewPage;
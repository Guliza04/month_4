import React from 'react';
import classes from './AboutPage.module.css'

function AboutPage(props) {
    return (
        <div>
            <h1 className={classes.title}>About Page</h1>
            <ul>
                <li>name: {props.user.name}</li>
                <li>age: {props.user.age}</li>

            </ul>
        </div>
    );
}

export default AboutPage;
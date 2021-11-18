import React from 'react';
import { useLocation,} from 'react-router-dom';
import {Redirect} from 'react'

export default function UserDashboard() {
    let location = useLocation();

    if(location.state === undefined){
        return <Redirect to="/illegal"/>
    }

    return (
        <div>
            <h1>UserDashboard path is {location.pathname}</h1>
            <h1>user loggedin in is {location.state.firstName}</h1>

        </div>
    )
}

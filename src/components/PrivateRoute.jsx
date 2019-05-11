import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute=({component:Component, ...rest})=>(
    <Route
        {...rest}
        render={props=>
            localStorage.getItem("authToken") ? (
                <Component {...props} />
            ):(
                <Redirect to={{pathname:rest.altPath,state:{from:props.location}}} />
            )
        }
    />
)

export default PrivateRoute;
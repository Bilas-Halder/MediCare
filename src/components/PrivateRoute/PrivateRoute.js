import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    const { user } = useAuth();
    const { children, ...rest } = props;
    // here "...rest" means every key value pair of props without children

    return (


        // here ...rest is just spread operator
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}

        ></Route>
    );
};

export default PrivateRoute;
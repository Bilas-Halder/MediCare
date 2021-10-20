import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = (props) => {
    const { user, loading } = useAuth();
    const { children, ...rest } = props;
    // here "...rest" means every key value pair of props without children

    if (loading) {
        // in the time of loading it will show a spinner
        return (
            <div style={{ minHeight: "80vh" }} className="d-flex justify-content-center align-items-center w-100">
                <Spinner animation="border" variant="danger" />
            </div>
        );
    }

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
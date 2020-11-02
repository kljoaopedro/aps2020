import React from 'react';
import {Route} from 'react-router-dom';


function PrivateRoute({component: Component, ...rest}) {
    const rendered = props => (<Component {...props} />);

    return <Route {...rest} render={rendered}/>;
}

export default PrivateRoute;

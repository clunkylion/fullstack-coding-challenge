import {Route, Redirect, RouteProps} from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {

}

export const PrivateRoute = ({component: Component, ...rest}: IPrivateRouteProps) => {
    //GET TOKEN FROM LOCAL STORAGE
    const token = localStorage.getItem('token');
    
    return (
        <Route 
            {...rest}
            render={props =>
                token ? (
                    Component ? (
                        <Component {...props} />
                    ) : (null)
                ) : (
                    <Redirect to={{pathname: '/login', state: {from: props.location}}} />
                )
            }
        />
    )
}
        

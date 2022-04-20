
import  { Navigate } from 'react-router-dom'
import {Route} from "react-router-dom"; 

export default function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Navigate to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }



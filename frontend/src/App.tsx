import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Routes/PrivateRoute';
import './App.css'

//Components
import {Login, Signup} from './Components/Auth'
import { Home } from './Components/Home/Home';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path='/home' component={Home} />
      </Switch>
    </Router>
  )
}

export default App

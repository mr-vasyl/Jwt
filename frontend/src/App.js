import React from 'react';
import {Switch, Route} from "react-router-dom";
import Test from './auth/test';
import Login from './auth/login';
import Home from './auth/home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className='container mt-lg-4'>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path='/test' component={Test}/>
                <Route exact path="/home" component={Home}/>
            </Switch>
        </div>
    )
}
export default App;
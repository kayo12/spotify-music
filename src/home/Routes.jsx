import React from 'react';
import {Switch, Route,Redirect} from 'react-router';

import Music from '../components/Music'
import Player from '../components/Player'
import MyList from '../components/MyList'
import Profile from '../components/Profile'
import Login from '../components/Login'

export default props =>
<Switch>
    <Route exact path='/' component={Music}/>
    <Route exact path='/profile' component={Profile}/>
    <Route exact path='/mylist' render={(prop) => <MyList {...prop} token={props.token}/> }/>
    <Route path='/player' component={Player}/>
    <Redirect from='*' to='/'/>
</Switch>


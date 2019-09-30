import React from 'react'
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Info from './person/Info'
import Tip from './person/Tip'
import Login from './person/Login'
import Register from "./person/Register";
import PrivateRoute from "./person/PrivateRoute";
// API
import { checkLogin } from "../api/person";
import '../static/css/person.less';

class Person extends React.Component {
  render() {
    return <section>
      <Switch>
        {/* <Route path='/person/info' render={() => {
          if (this.state.isLogin) { return <Info /> }
          return <Tip />
          // return <Info />
        }} /> */}

        <Route path='/person/login' component={Login} />
        <Route path='/person/register' component={Register} />
        <PrivateRoute path='/person' component={Info} />
        {/* <Redirect from='/person' to='/person/info' /> */}
      </Switch>
    </section>
  }
}

export default connect()(Person)
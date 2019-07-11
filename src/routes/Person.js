import React from 'react'
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Info from './person/Info'
import Tip from './person/Tip'
import Login from './person/Login'
import Register from "./person/Register";
// API
import { checkLogin } from "../api/person";
class Person extends React.Component {
    constructor(props, context) {
        super(props, context)
        // state
        this.state = {
            isLogin: false
        }
    }
    // 验证是否登录
    async componentDidMount() {
        let ret = await checkLogin(),
            isLogin = parseFloat(ret.code) === 0 ? true : false
        this.setState({ isLogin })
    }
    render() {
        return <section>
            <Switch>
                <Route path='/person/info' render={() => {
                    // console.log(this.state.isLogin);
                    
                    if (this.state.isLogin) {return <Info />}
                    // return <Tip />
                    return <Info />
                }} />
                <Route path='/person/login' compontent={Login} />
                <Route path='/person/register' compontent={Register} />
                <Redirect from='/person' to='/person/info' />
            </Switch>
        </section>
    }
}

export default connect()(Person)
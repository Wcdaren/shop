import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";
import { checkLogin } from "../../api/person";
import Tip from "./Tip";
import { Info } from './Info';
import action from '../../store/action/index'

import { connect } from "react-redux";

class PrivateRoute extends Component {
	constructor(props, context) {
		super(props, context)
		// state
		this.state = {
			isLogin: false
		}
	}
	// 验证是否登录
	async componentDidMount() {
		// let { isLogin, checkLogin } = this.props
		
		// let ret = await checkLogin(),
		// 	isLogin = parseFloat(ret.code) === 0 ? true : false
		// this.setState({ isLogin })
	}
	// // 更新的时候走 updata
	// async componentWillReceiveProps() {
	// 	let ret = await checkLogin(),
	// 		isLogin = parseFloat(ret.code) === 0 ? true : false
	// 	this.setState({ isLogin })
	// }
	render() {

		let { component: Component, ...rest } = this.props
		debugger
		return (
			// 基于render返回的组件 不是受路由管控的组件 所以是所以无法获得提供者的属性

			<Route
				{...rest}
				render={props =>
					this.state.isLogin
						? (<Component {...props} />)
						: (<Info />)
					// : (<Redirect
					// 	to={{
					// 		pathname: '/person/login',
					// 		state: { from: props.location }
					// 	}}
					// />)
				}
			/>
		);
	}
}

export default connect(state => state.person, action.person)(PrivateRoute)
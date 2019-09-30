import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
class PrivateRoute extends Component {
	render() {
		let { component: Component, isLogin, ...rest } = this.props
		return (
			// 基于render返回的组件 不是受路由管控的组件 所以是所以无法获得提供者的属性
			<Route
				{...rest}
				render={props =>
					isLogin
						? (<Component {...props} />)
						: (<Redirect
							to={{
								pathname: '/person/login',
								state: { from: props.location }
							}}
						/>)
				}
			/>
		);
	}
}

export default connect(state => state.person, null)(PrivateRoute)
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'

export class NavTop extends Component {

  render() {
    return <header className='headerNavBox'>
      {/* 首页的导航 */}
      <div className="homeBox">
        <div className="baseBox">
          <h1 className='logo'>wcdaren</h1>
          <Icon className='icon' type='bars' style={{
            fontSize: '.8rem'
          }}></Icon>
        </div>
        <ul className="filterBox">
          <li>全部内容</li>
          <li>js</li>
          <li>react</li>
          <li>计算机网络</li>
        </ul>
      </div>
    </header>
  }
}

export default withRouter(connect()(NavTop))

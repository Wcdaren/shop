import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class NavTop extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return <header className='headerNavBox'>
      <div>
        我是头部导航
      </ div>
    </header>
  }
}

export default withRouter(connect()(NavTop))

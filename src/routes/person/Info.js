import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import { exitLogin } from '../../api/person';
import { withRouter } from 'react-router-dom'
import { queryInfo } from '../../api/course';
import action from '../../store/action/index'



export class Info extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      baseInfo: null
    }
  }
  async componentDidMount() {
    let { baseInfo, queryBaseInfo } = this.props
    // 如果不存在 就要执行 queryBaseInfo 来获取数据
    if (!baseInfo) await queryBaseInfo()
    this.setState({ baseInfo })
    // !baseInfo ? queryInfo() : null
  }
  render() {
    let { baseInfo } = this.props
    // 如果没有数据 直接为空
    if (!baseInfo) return ''
    let { name, email, phone } = baseInfo
    return <div className='personBaseInfo'>
      <p>
        <span>用户名：</span>
        <span>{name}</span>
      </p>
      <p>
        <span>邮箱：</span>
        <span>{email}</span>
      </p>
      <p>
        <span>电话：</span>
        <span>{phone}</span>
      </p>

      <Button type='danger'
        onClick={async (ev) => {
          await exitLogin()
          this.props.history.push('/person')
        }}
      >退出登录</Button>
    </div>
  }
}

// 把属性和方法都挂在到info上
export default withRouter(connect(state => ({ ...state.person }), action.person)(Info))

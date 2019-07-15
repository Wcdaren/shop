import React, { Component } from 'react'
import Qs from 'qs'
import { connect } from 'react-redux'
import { Button } from 'antd';
import { queryInfo } from '../../api/course';

export class Info extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      data: null
    }
  }

  async componentDidMount() {
    // : 是对属性取另一个名字
    // : {} 这样就可以形成再次解构
    let { location: { search } } = this.props
    let { courseId = 0 } = Qs.parse(search.substr(1)) || {}
    let result = await queryInfo(courseId)

    if (parseFloat(result.code) === 0) {
      this.setState({
        data: result.data
      })
    }
  }

  render() {
    let { data } = this.state
    if (!data) return ''
    return (
      < div className='baseInfo' >
        <video src="" controls preload='none' poster={data.pic}></video>
        <div className='content'>
          <h3>{data.name}</h3>
          <p>{data.dec}</p>
          <span>课程价格：{data.price}</span>
          <Button type='danger'>立即购买</Button>
        </div>
      </div >
    )
  }
}


export default Info

import React, { Component } from 'react'
import Qs from 'qs'
import { connect } from 'react-redux'
import { Button } from 'antd';
import { queryInfo, addShopCar, removeShopCar } from '../../api/course';
import action from '../../store/action'

export class Info extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      data: null,
      isShop: -1 // 存储是否已经添加到购物车 
      /**
       * -1 没有加入购物车
       * 0 已加入但是未支付
       * 1 已支付
       */
    }
  }

  async componentDidMount() {
    // : 是对属性取另一个名字
    // : {} 这样就可以形成再次解构
    let { location: { search } } = this.props
    let { courseId = 0 } = Qs.parse(search.substr(1)) || {}
    this.courseId = courseId
    let result = await queryInfo(courseId)

    if (parseFloat(result.code) === 0) {
      // 校验当前课程的状态
      let { pay = [], unpay = [] } = this.props.shopCar
      let isShop = -1;
      // 在redux未购买和已购买的集合中筛选是否有当前展示的课程
      if (unpay.find(item => parseFloat(item.id) === parseFloat(courseId))) isShop = 0
      if (pay.find(item => parseFloat(item.id) === parseFloat(courseId))) isShop = 1
      this.setState({
        data: result.data,
        isShop
      })
    }
  }

  render() {
    let { data, isShop } = this.state
    if (!data) return ''
    return (
      < div className='baseInfo' >
        <video src="" controls preload='none' poster={data.pic}></video>
        <div className='content'>
          <h3>{data.name}</h3>
          <p>{data.dec}</p>
          <span>课程价格：{data.price}</span>
          <Button
            type={isShop === -1 ? 'dashed' : ''}
            onClick={this.handleShopCar}
          >
            {isShop === -1 ? '加入购物车' : '从购物车移除'}
          </Button>
        </div>
      </div >
    )
  }
  handleShopCar = async ev => {
    if (this.state.isShop === -1) {
      // 还未加入购物车(按钮：加入购物车)
      let result = await addShopCar(this.courseId)
      if (parseFloat(result.code) === 0) {
        // dispatch派发任务：通知redux容器中的购物信息进行更新
        this.props.queryUnpay();
        this.setState({ isShop: 0 })
      }
      return
    }
    // 已经加入购物车(按钮：移除购物差)
    let result = await removeShopCar(this.courseId)
    if (parseFloat(result.code) === 0) {
      this.props.queryUnpay();
      this.setState({ isShop: -1 })
    }
  }
}


export default connect(state => state.course, action.course)(Info)

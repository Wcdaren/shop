import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd';
import action from "../../store/action/index";


export class List extends Component {


  async componentDidMount() {
    let { queryBanner, bannerData } = this.props
    if (!bannerData || bannerData.length === 0) queryBanner()
  }


  render() {
    let { bannerData } = this.props
    return (
      <div className='listBox'>
        {/* 如果有数据才展示
            这里注意不能使用if,所以我们使用三元运算符
        */}
        {bannerData && bannerData.length !== 0
          ? (<Carousel autoplay>
            {bannerData.map((item, index) => {
              let { name, pic } = item
              return <div key={index}>
                <img src={pic} alt={name} />
              </div>
            })}
          </Carousel>)
          : ''
        }
      </div>
    )
  }
}

export default connect(state => ({ ...state.course }), action.course)(List)

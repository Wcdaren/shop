import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel, Icon, Button } from 'antd';
import { Link } from "react-router-dom";
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
        <div className='courseList'>
          <h2><Icon type='menu-fold' />
            全部课程
          </h2>
          <ul>
            <li>
              <Link to={{
                pathname: '/course/info',
                serach: '?courseId=1'
              }}>
                <h2>sdfsdfdsfsdf</h2>
                <div className='content'>
                  <div className='pic'>
                    <img src="" alt="" />
                  </div>
                  <div className='desc'>
                    <p>描述</p>
                    <p>时间</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={{
                pathname: '/course/info',
                serach: '?courseId=1'
              }}>
                <h2>sdfsdfdsfsdf</h2>
                <div className='content'>
                  <div className='pic'>
                    <img src="" alt="" />
                  </div>
                  <div className='desc'>
                    <p>描述</p>
                    <p>时间</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <Button type='dash'>加载更多</Button>
        </div>

      </div >
    )
  }
}

export default connect(state => ({ ...state.course }), action.course)(List)

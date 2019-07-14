import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel, Icon, Button } from 'antd';
import { Link } from "react-router-dom";
import action from "../../store/action/index";


export class List extends Component {


  async componentDidMount() {
    let { queryBanner, bannerData, courseData, queryList } = this.props
    if (!bannerData || bannerData.length === 0) queryBanner()
    if (courseData.data.length === 0) queryList()
  }

  queryType = () => {
    let { courseType } = this.props,
      text = '全部课程'
    switch (courseType) {
      case 'react':
        text = 'react'
        break;
      case 'vue':
        text = 'vue'
        break
      case 'tencen':
        text = 'rencen'
        break
      default:
        break;
    }
    return text
  }

  render() {
    let { bannerData, courseType, courseData } = this.props,
      { data } = courseData

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
            {this.queryType(courseType)}
          </h2>
          {data && data.length !== 0
            ? <div>
              <ul>
                {data.map((item, index) => {
                  let { name, pic, dec, id, time } = item
                  return <li>
                    <Link to={{
                      pathname: '/course/info',
                      search: `?courseId=${id}`
                    }}>
                      <h3>{name}</h3>
                      <div className='content'>
                        <div className='pic'>
                          <img src={pic} alt={name} />
                        </div>
                        <div className='desc'>
                          <p>{dec}</p>
                          <p>时间：{time}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                })}
              </ul>
              <Button type='dash'>加载更多</Button>
            </div>
            : '暂无数据'
          }
        </div>
      </div >
    )
  }
}

export default connect(state => ({ ...state.course }), action.course)(List)

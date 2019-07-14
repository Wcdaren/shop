import * as TYPES from '../action-types'

let INIT_STATE = {
  bannerData: [],
  courseData: {
    total: 1,
    limit: 10,
    page: 1,
    data: []
  },
  courseType: 'all'
}
export default function course(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    // 获取轮播图数据
    case TYPES.COURSE_QUERY_BANNER:
      let { code, data } = action.payload
      if (parseFloat(code) === 0) {
        state.bannerData = data
      }
      break
    case TYPES.COURSE_QUERY_LIST:
      let { result, flag, courseType } = action
      state.courseType = courseType
      if (parseFloat(result.code) === 0) {
        state.courseData.total = parseFloat(result.total)
        state.courseData.limit = parseFloat(result.limit)
        state.courseData.page = parseFloat(result.page)
        state.courseData.data =
          flag === 'push' ?
            state.courseData.data.concat(result.data)
            : result.data
      }
      break
  }
  return state
}
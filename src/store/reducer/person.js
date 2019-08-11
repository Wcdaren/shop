import * as TYPES from '../action-types';

let INIT_STATE = {
  baseInfo: null
};
export default function person(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state));
  // 我们可能会使用到好几次，所以我们定义在外面
  let payload = {};
  switch (action.type) {
    case TYPES.PERSON_QUERY_BASE:
      payload = action.payload
      // parseFloat(playload.code) === 0 ? state.baseInfo = playload.data : null
      if (parseFloat(payload.code) === 0) {
        state.baseInfo = payload.data
      }
      break
    default:
      break
  }
  return state;
};
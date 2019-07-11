import * as TYPES from '../action-types';

let INIT_STATE = {
    baseInfo: null
};
export default function person(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    // 我们可能会使用到好几次，所以我们定义在外面
    let playload = {};
    switch (action.type) {
        case TYPES.PERSON_QUERY_BASE:
            playload = action.playload
            // parseFloat(playload.code) === 0 ? state.baseInfo = playload.data : null
            if (parseFloat(playload.code) === 0) {
                state.baseInfo = playload.data
            }
            break
    }
    return state;
};
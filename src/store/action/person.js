import * as TYPES from '../action-types';
import { queryInfo, checkLogin, exitLogin } from '../../api/person';

let person = {
  queryBaseInfo() {
    return {
      type: TYPES.PERSON_QUERY_BASE,
      payload: queryInfo()
    }
  },
  checkLogin() {
    return {
      type: TYPES.PERSON_CHECK_LOGIN,
      payload: checkLogin()
    }
  },
  exitLogin() {
    return {
      type: TYPES.PERSON_EXIT_LOGIN,
      payload: exitLogin()
    }
  }
};
export default person;
import * as TYPES from '../action-types';
import {queryInfo} from '../../api/person';

let person = {
    queryBaseInfo() {
        return {
            type: TYPES.PERSON_QUERY_BASE,
            playload: queryInfo()
        }
    }
};
export default person;
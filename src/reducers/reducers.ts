import { combineReducers } from 'redux';

import application from './application';
import unit from './unit';

/** 引数にとったreducerを更新して1つのreducerにして返したもの */
const rootReducer = combineReducers({
	application,
	unit
});
export default rootReducer;

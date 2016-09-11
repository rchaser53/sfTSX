import { combineReducers } from 'redux';

import application from './application';
import unit from './unit';

const reduxUndo = require('redux-undo').default

/** 引数にとったreducerを更新して1つのreducerにして返したもの */
const rootReducer = combineReducers({
	application,
	unit:reduxUndo(unit)
});
export default rootReducer;
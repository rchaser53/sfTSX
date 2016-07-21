import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/reducers';

/** log出力の定義情報 */
const loggerMiddleware = createLogger({
  level: 'error',
  collapsed: false
});

/**
* reduxのmiddle ware
* promiseや非同期処理に対応するために必要
* logを出力したい場合はcreateLoggerで作成したinstanceをapplyMiddlewareの引数に加える
*/
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, promiseMiddleware)(createStore);

/**
* studioのstateを管理するstoreを作成し、返す
*
* @param {any} intialState studioのstateの初期状態
* @return {any} 作成されたstore
*/
const configureStore = (initialState?: any) => {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	return store;
};

export default configureStore;
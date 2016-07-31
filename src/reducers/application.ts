import * as immutable from 'immutable';
import { application as Types } from '../actions/application';

interface applicationState{
    activeUnit:string;
    themeColor:string;
}

const initialState:applicationState = {
	activeUnit:null,
    themeColor:null
};

const application = (state = initialState, action)=>{
    let tempState;
    switch(action.type){
    	case Types.ACTIVATE_UNIT:
    		// objectをdeep copyする(値が同じだが違うobjectを作成する)
    		tempState = immutable.fromJS(state).toJS();
    		tempState.activeUnit = action.payload.id;

    		return tempState;
        case Types.CHANGE_THEME_COLOR:
            // objectをdeep copyする(値が同じだが違うobjectを作成する)
            tempState = immutable.fromJS(state).toJS();
            tempState.themeColor = action.payload.themeColor;

            return tempState;
    	default:
    		return state;
    }
};
export default application;
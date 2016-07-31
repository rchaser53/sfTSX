import * as immutable from 'immutable';
import { unit as Types } from '../actions/unit';

const initialState = {
};

const unit = (state = initialState, action) =>{
    let tempState,id,text;
    switch(action.type){
    	case Types.ADD_UNIT:
    		// objectをdeep copyする(値が同じだが違うobjectを作成する)
    		tempState = immutable.fromJS(state).toJS();

            id = action.payload.id;
            text = action.payload.text;

    		tempState[id] = {
                id,text
            };
    		return tempState;
        case Types.DELETE_UNIT:
            // objectをdeep copyする(値が同じだが違うobjectを作成する)
            tempState = immutable.fromJS(state).toJS();
            id = action.payload.id;

            if(id != null && tempState[id] != null){
                delete tempState[id];
                return tempState;
            } else{
                return state;
            }
    	default:
    		return state;
    }
};
export default unit;
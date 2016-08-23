import * as immutable from 'immutable';
import { Types as UnitTypes } from '../actions/unit';

const initialState = {
};

const unit = (state = initialState, action) =>{
    let tempState,id,left,top,text;
    switch(action.type){
    	case UnitTypes.ADD_UNIT:
    		// objectをdeep copyする(値が同じだが違うobjectを作成する)
    		tempState = immutable.fromJS(state).toJS();

            id = action.payload.id;
            text = action.payload.text;

    		tempState[id] = {
                id,text,left:0,top:0
            };
    		return tempState;
        case UnitTypes.DELETE_UNIT:
            // objectをdeep copyする(値が同じだが違うobjectを作成する)
            tempState = immutable.fromJS(state).toJS();
            id = action.payload.id;

            if(id != null && tempState[id] != null){
                delete tempState[id];
                return tempState;
            } else{
                return state;
            }
        case UnitTypes.MOVE_UNIT:
            // objectをdeep copyする(値が同じだが違うobjectを作成する)
            tempState = immutable.fromJS(state).toJS();
            tempState[action.payload.id].left = action.payload.left;
            tempState[action.payload.id].top = action.payload.top;
            return tempState;
    	default:
    		return state;
    }
};
export default unit;
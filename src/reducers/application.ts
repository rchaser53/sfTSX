import * as immutable from 'immutable';

const initialState = {
	activeUnit:null
};

const application = (state = initialState, action)=>{
    switch(action.type){
    	case "ACTIVATE_UNIT":
    		// objectをdeep copyする(値が同じだが違うobjectを作成する)
    		const tempState = immutable.fromJS(state).toJS();
    		tempState.activeUnit = action.payload.id;

    		return tempState;
    	default:
    		return state;
    }
};
export default application;
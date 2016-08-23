export class Types {
	static ADD_UNIT = "ADD_UNIT";
	static DELETE_UNIT = "DELETE_UNIT";
	static MOVE_UNIT = "MOVE_UNIT";
}

export const addUnit:action = (text:string)=>{
	return {
		type:Types.ADD_UNIT,
		payload:{
			id:`id_${Date.now()}`,
			text
		}
	}
};

export const deleteUnit:action = (id:string)=>{
	return {
		type:Types.DELETE_UNIT,
		payload:{
			id
		}
	}
};

export const moveUnit:action = (id:string,left:number,top:number)=>{
	return {
		type:Types.MOVE_UNIT,
		payload:{
			id,left,top
		}
	}
};
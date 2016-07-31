export enum unit {
	ADD_UNIT,
	DELETE_UNIT
}

export const addUnit = (text:string)=>{
	return {
		type:unit.ADD_UNIT,
		payload:{
			id:`id_${Date.now()}`,
			text
		}
	}
};

export const deleteUnit = (id:string)=>{
	return {
		type:unit.DELETE_UNIT,
		payload:{
			id
		}
	}
};
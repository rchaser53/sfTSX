export const addUnit = (text:string)=>{
	return {
		type:"ADD_UNIT",
		payload:{
			id:`id_${Date.now()}`,
			text
		}
	}
};

export const deleteUnit = (id:string)=>{
	return {
		type:"DELETE_UNIT",
		payload:{
			id
		}
	}
};
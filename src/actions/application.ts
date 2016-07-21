export const activateUnit = (id:string)=>{
	return {
		type:"ACTIVATE_UNIT",
		payload:{
			id
		}
	}
};
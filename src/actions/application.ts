export enum application {
	ACTIVATE_UNIT,
	CHANGE_THEME_COLOR
}

export const activateUnit = (id:string)=>{
	return {
		type:application.ACTIVATE_UNIT,
		payload:{
			id
		}
	}
};

export const navibar = (themeColor:string)=>{
	return {
		type:application.CHANGE_THEME_COLOR,
		payload:{
			themeColor
		}
	}
}
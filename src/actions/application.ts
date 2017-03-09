export interface Action {
	type: string;
	payload: any;
}
export type ActionCreator = (...arg: any[]) => Action;

export const application = {
	ACTIVATE_UNIT: 'ACTIVATE_UNIT',
	CHANGE_THEME_COLOR: 'CHANGE_THEME_COLOR'
}

export const activateUnit:ActionCreator = (id:string)=>{
	return {
		type:application.ACTIVATE_UNIT,
		payload:{
			id
		}
	}
};

export const changeThemeColor = (themeColor:string)=>{
	return {
		type:application.CHANGE_THEME_COLOR,
		payload:{
			themeColor
		}
	}
}
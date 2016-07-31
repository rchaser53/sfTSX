import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
	addUnit,
	deleteUnit
} from '../actions/unit';

import {
	activateUnit,
	changeThemeColor
} from '../actions/application';

import SideBar from './SideBar';
import Unit from './Unit';
import Navibar from './Navibar';

const mapStateToProps = (state)=>{
	return {
		unit : state.unit,
		activeUnit : state.application.activeUnit,
		themeColor: state.application.themeColor
	};
}

//　keyとvalueが同じ場合valueが省略できる
// {addUnit}　と {addUnit:addUnit}意味
const mapDispatchToProps = (dispatch)=>{
	return bindActionCreators({
		addUnit,
		deleteUnit,
		activateUnit,
		changeThemeColor
	},dispatch);
}

interface Props{
	unit:{[key:string]:{
		id:string;
		text:string;
	}};
	activeUnit:string;
	themeColor:string;
	addUnit:Function;
	activateUnit:Function;
	deleteUnit:Function;
	changeThemeColor:(x:string)=>void;
}

export class App<S,T> extends React.Component<Props, {}>{
	makeUnitArray():JSX.Element[]{
		const { unit,activateUnit,activeUnit } = this.props;

		return Object.keys(unit).map((key)=>{
			const {id,text} = unit[key];

			return (<Unit 	key={id} text={text} isActive={id===activeUnit}
							activateUnit={()=>{ activateUnit(id); }} />);
		})
	}
	render(){
		const { addUnit,deleteUnit,activateUnit,
				activeUnit,changeThemeColor,themeColor } = this.props;

		return (<div className="divAppWrapper">
					<Navibar themeColor={themeColor} />
					<div className="divAppArea">
						<SideBar addUnit={addUnit} changeThemeColor={changeThemeColor}
								 deleteUnit={()=>{ deleteUnit(activeUnit); }}  />
						<div>
							{
								this.makeUnitArray()
							}
						</div>
					</div>
				</div>);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
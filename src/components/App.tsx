import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const HTML5Backend = require('react-dnd-html5-backend');
const DragDropContext = require('react-dnd').DragDropContext;

import {
	addUnit,
	deleteUnit,
	moveUnit
} from '../actions/unit';

import {
	activateUnit,
	changeThemeColor
} from '../actions/application';

import SideBar from './SideBar';
import Unit from './Unit';
import Navibar from './Navibar';
import DropArea from './DropArea';

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
		changeThemeColor,
		moveUnit
	},dispatch);
}

interface Props{
	unit:{[key:string]:{
		id:string;
		text:string;
		left:number;
		top:number;
	}};
	activeUnit:string;
	themeColor:string;
	addUnit:action;
	activateUnit:action;
	deleteUnit:action;
	moveUnit:action;
	changeThemeColor:(x:string)=>void;
}

export class App<S,T> extends React.Component<Props, {}>{
	makeUnitArray():JSX.Element[]{
		const { unit,activateUnit,activeUnit,moveUnit } = this.props;

		return Object.keys(unit).map((key)=>{
			const {id,text,left,top} = unit[key];

			return (<Unit 	key={id} text={text} isActive={id===activeUnit} 
							moveUnit={(left:number,top:number)=>{
								moveUnit(id,left,top);
							}} left={left} top={top}
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
						
						<DropArea>
							{ this.makeUnitArray() }
						</DropArea>
					</div>
				</div>);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(App));
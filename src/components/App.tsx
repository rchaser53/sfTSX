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
		unit : state.unit.present,
		activeUnit : state.application.activeUnit,
		themeColor: state.application.themeColor
	};
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
	dispatch:(...x)=>any;
}

export class App<S,T> extends React.Component<Props, {}>{
	static childContextTypes = {
		dispatch: React.PropTypes.any,
	}

	getChildContext(){
		return {
			dispatch:this.props.dispatch
		};
	}

	constructor(){
		super();
		this.addUnit = this.addUnit.bind(this);
		this.deleteUnit = this.deleteUnit.bind(this);
		this.changeThemeColor = this.changeThemeColor.bind(this);
	}

	addUnit(condition:string):void {
		this.props.dispatch(addUnit(condition));
	}

	deleteUnit(id:string):void{
		this.props.dispatch(deleteUnit(id));
	}

	changeThemeColor(color:string):void{
		this.props.dispatch(changeThemeColor(color));
	}

	makeUnitArray():JSX.Element[]{
		const { unit,dispatch,activeUnit } = this.props;

		return Object.keys(unit).map((key,index)=>{
			const {id,text,left,top} = unit[key];

			return (<Unit 	key={id || `tempId${index}`} text={text} isActive={id===activeUnit} 
							moveUnit={(left:number,top:number)=>{
								dispatch(moveUnit(id,left,top));
							}} left={left} top={top}
							activateUnit={()=>{ dispatch(activateUnit(id)); }} />);
		})
	}
	render(){
		const { activeUnit,themeColor } = this.props;

		return (<div className="divAppWrapper">
					<Navibar themeColor={themeColor} />
					<div className="divAppArea">
						<SideBar addUnit={this.addUnit} targetId={activeUnit}
						 	changeThemeColor={this.changeThemeColor} deleteUnit={this.deleteUnit} />
						<DropArea>
							{ this.makeUnitArray() }
						</DropArea>
					</div>
				</div>);
	}
}
export default connect(mapStateToProps)(DragDropContext(HTML5Backend)(App));
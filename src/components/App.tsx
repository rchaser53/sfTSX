import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
	addUnit,
	deleteUnit
} from '../actions/unit';

import {
	activateUnit
} from '../actions/application';

import SideBar from './SideBar';
import Unit from './Unit';

const mapStateToProps = (state)=>{
	return {
		unit : state.unit,
		activeUnit : state.application.activeUnit
	};
}

//　keyとvalueが同じ場合valueが省略できる
// {addUnit}　と {addUnit:addUnit}意味
const mapDispatchToProps = (dispatch)=>{
	return bindActionCreators({
		addUnit,
		deleteUnit,
		activateUnit
	},dispatch);
}

interface Props{
	unit:{[key:string]:{
		id:string;
		text:string;
	}};
	activeUnit:string;
	addUnit:Function;
	activateUnit:Function;
	deleteUnit:Function;
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
		const { addUnit,deleteUnit,activateUnit,activeUnit } = this.props;

		return (<div className="divAppWrapper">
					<SideBar addUnit={addUnit} deleteUnit={()=>{
						deleteUnit(activeUnit);
					}}/>
					<div>
						{
							this.makeUnitArray()
						}
					</div>
				</div>);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
import * as React from 'react';
import Unit from './Unit';
import {DropTarget,DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

interface Props{
	connectDropTarget:(x:JSX.Element)=>any;
	children:JSX.Element;
}

const boxTarget = {
  drop(props, monitor, component) {
    const delta = monitor.getDifferenceFromInitialOffset();
    const {moveUnit,left,top} = monitor.getItem();
    moveUnit(Math.round(left + delta.x),Math.round(top + delta.y));
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
})

export const DropArea:React.StatelessComponent<Props> = (props:Props) =>{
	const {connectDropTarget} = props;
	return connectDropTarget(<div className="dropArea">
														{props.children}
													</div>);
}

export default DropTarget("UNIT",boxTarget,collect)(DropArea);
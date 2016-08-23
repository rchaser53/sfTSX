import * as React from 'react';
import { DragSource } from 'react-dnd';

interface Props{
	isActive:boolean;
	isDragging:boolean;
	text:string;
	left:number;
	top:number;
	connectDragSource:Function
	activateUnit:action;
	moveUnit:action;
}

/**
 * Implements the drag source contract.
 */
const unitSource = {
  beginDrag(props) {
    return {
      left: props.left,
			top: props.top,
			moveUnit:props.moveUnit
    };
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

// stateless functional component
// stateとライフサイクルを持たないcomponentを作成する。処理が早いので可能なら使う
const Unit:React.StatelessComponent<Props> = (props:Props) =>{
	const {
		isActive,text,left,top,isDragging,
		activateUnit,connectDragSource
	} = props;

	const tempClass = (isActive)
						?"unit active"
						:"unit";
	
	if(isDragging){
		return false;
	}

	return connectDragSource(<div style={{position:"absolute",left,top}} 
																className={tempClass} onClick={activateUnit}>{text}</div>);
}
export default DragSource("UNIT", unitSource, collect)(Unit);
import * as React from 'react';
const { DragSource } = require('react-dnd');

interface Props{
	isActive:boolean;
	isDragging:boolean;
	text:string;
	connectDragSource:Function
	activateUnit:Function;
}

/**
 * Implements the drag source contract.
 */
const unitSource = {
  beginDrag(props) {
    return {
      text: props.text
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
		isActive,text,activateUnit,connectDragSource,isDragging
	} = props;

	const tempClass = (isActive)
						?"unit active"
						:"unit";

	return connectDragSource(<div className={tempClass} onClick={activateUnit}>{text}</div>);
}
export default DragSource("UNIT", unitSource, collect)(Unit);
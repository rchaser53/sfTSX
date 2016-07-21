import * as React from 'react';

interface Props{
	isActive:boolean;
	text:string;
	activateUnit:Function;
}

// stateless functional component
// stateとライフサイクルを持たないcomponentを作成する。処理が早いので可能なら使う
const Unit:React.StatelessComponent<Props> = (props:Props) =>{
	const {
		isActive,text,activateUnit
	} = props;

	const tempClass = (isActive)
						?"unit active"
						:"unit";

	return (<div className={tempClass} onClick={activateUnit}>{text}</div>);
}
export default Unit;
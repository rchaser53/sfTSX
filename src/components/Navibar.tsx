import * as React from 'react';

interface Props{
	themeColor:string;
}

export class Navibar<S,T> extends React.Component<Props, {}>{
	navibar:HTMLDivElement;
	componentDidUpdate(){
		this.navibar.style.backgroundColor = this.props.themeColor;
	}
	render(){
		return (<div className="divNavibar" ref={(elem)=>{
					this.navibar = elem;
				}} />);

	}
}
export default Navibar;
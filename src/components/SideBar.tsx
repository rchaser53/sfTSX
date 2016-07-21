import * as React from 'react';

interface State{
	condition:string;
}

interface Props{
	addUnit:Function;
	deleteUnit:Function;
}

export class SideBar<S,T> extends React.Component<Props, State>{
	constructor(){
		super();
		// classの持つ状態。class内でしか使わず、class外に値を渡さないこと
		this.state = {
			condition:null
		}
	}
	render(){
		const {
			condition
		} = this.state;

		const {
			addUnit,deleteUnit
		} = this.props;

		return (<div className="sideBarOuter">
					<div>
						<div>
							<div className="sideBarTitle">name</div>
							<input type="text" value={condition} onChange={(event:any)=>{
								// classのstateを変更したいときに使うsetter
								this.setState({condition:event.target.value});
							}} />

							<div>
								<button onClick={()=>{
									addUnit(condition);
								}}>add</button>
								<button onClick={deleteUnit}>delete</button>
							</div>

						</div>
					</div>
				</div>);
	}
}
export default SideBar;
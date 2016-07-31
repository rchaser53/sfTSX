import * as React from 'react';
const jsforce = require('jsforce');

interface State{
	condition:string;
}

interface Props{
	addUnit:Function;
	deleteUnit:Function;
	changeThemeColor:(x:string)=>void;
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
			addUnit,deleteUnit,changeThemeColor
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

							<div>
								<button onClick={()=>{
									try{
										const conn = new jsforce.Connection({
															instanceUrl: 'salesforce組織のURL',
															proxyUrl: 'http://localhost:3000/proxy'
														});

										conn.login('salesforceのログインアカウント', 'パスワード', (err, res)=>{
											if (err){
												return console.error(err);
											}

											conn.query(`SELECT Id, Name FROM Account`, function(err, res) {
												if (err){
													return console.error(err);
												}
												console.log(res);
											});
										});
									} catch (error){
										console.log(error);
									}
								}}>login salesforce</button>

								<div>
									<div>
										Theme Color
									</div>
									<input onChange={(event:any)=>{
										changeThemeColor(event.target.value);
									}} />
								</div>

							</div>
						</div>
					</div>
				</div>);
	}
}
export default SideBar;
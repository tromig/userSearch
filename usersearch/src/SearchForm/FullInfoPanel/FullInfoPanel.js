import React, {Component} from 'react';
import "./FullInfoPanel.css";


class FullInfoPanel extends Component{
	render(){
		const my = this.props.userData;

		function formatDate(dateString){
			let workDate = dateString.split("T")[0];
			workDate = workDate.split('-');
			workDate = workDate.map((num) => num[0] === '0' ? num[1] : num);
			return workDate[1]+'/'+workDate[2]+"/"+workDate[0];
		}

		function formatAcctAge(dateStr, age){
			const acctDate = formatDate(dateStr);
			return acctDate + " (" + age + " years)";
		}

		return(
			<div className={ this.props.visible }>
				<div className="panelBacker" onClick={ this.props.closeClick }></div>
					<div className="fullInfoPanel">
						<button className='trClose' onClick={ this.props.closeClick}>X</button>
						<div className='full-head'>
							<img className='full-image' src={ this.props.userData.picture.large } alt="user" />	
							<div className="full-nameAddr">
								<div className='full-name' >{my.name.first + " " + my.name.last}</div>
								<div className="full-address">{my.location.street + " " + my.location.city +", " + my.location.state + " " + my.nat + " " + my.location.postcode}</div>
								<div className="hdSep"></div>
							</div>
						</div>	

						<div className="full-acctInfo">
							<div class='full-email'><span className='itemLabel'>email:</span>{ my.email }</div>
							<div className='full-userName'><span className='itemLabel'>user name:</span>{ my.login.username }</div>
							<div className='full-password'><span className='itemLabel'>pw:</span>{ my.login.password }</div>
						</div>

						<div className="full-acctInfo">
							<div class='full-age'><span className='itemLabel'>Age:</span>{ my.dob.age }</div>
							<div className='full-dob'><span className='itemLabel'>d.o.b.:</span>{ formatDate(my.dob.date) }</div>							
							<div class='full-acctStart'><span className='itemLabel'>member since:</span>{ formatAcctAge(my.registered.date, my.registered.age) }</div>
						</div>

						<div className="full-acctInfo">
							<div class='full-phone'><span className='itemLabel'>phone:</span>{ my.phone }</div>
							<div className='full-cell'><span className='itemLabel'>cell:</span>{ my.cell }</div>							
						</div>

					</div>
			</div>
		);
	}

}

export default FullInfoPanel;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isFutureOrPresentDate} from '../utils/date_utils';
import {updatePurpose} from '../actions';

class Purpose extends Component{


  toggleCheckboxChange(event){
    let modPurpose = Object.assign({}, this.props.data);
    modPurpose.completed = event.target.checked;
    this.props.updatePurpose(modPurpose);
  }


  render(){
    const {id, description, completed, date} = this.props.data;
    const isFuture = true;//isFutureOrPresentDate(this.props.date);
    const itemClassName=`list-group-item d-flex justify-content-between align-items-center ${completed?'list-group-item-success':''}`;
    return (
      <li key={id} className={itemClassName}>
        {description}
        <span className='badge badge-default badge-pill text-secondary'>
          <input type='checkbox' value='completed' defaultChecked={completed} disabled={!isFuture}
            onChange={this.toggleCheckboxChange.bind(this)} />
        </span>
      </li>
    );
  }


}


export default connect(null,{updatePurpose})(Purpose);

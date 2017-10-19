import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {dateToString, isPastDate, isFutureDate} from '../utils/date_utils';
import NewPurpose from './new_purpose';
//import {fetchPost, deletePost} from '../actions';

class DailyPurpose extends Component{



  renderPurposes(){
    const isFuture = isFutureDate(this.props.date);

    return _.map(this.props.purposes, (p) => {
      //const disabled=isPast?'':'disabled';
      const itemClassName=`list-group-item d-flex justify-content-between align-items-center ${p.completed?'list-group-item-success':''}`;
      return (
        <li key={p.id} className={itemClassName}>
            {p.description}
            <span className='badge badge-default badge-pill text-secondary'>
                <input type='checkbox' value='completed' defaultChecked={p.completed} disabled={isFuture} />
            </span>
        </li>
      );
    });
  }



  render(){
    const {date}=this.props;

    return (
      <div><h3><span className='text-muted'>{this.props.date.getMonth()}/</span>{date.getDate()}</h3>
        <ul className='list-group'>
          {this.renderPurposes()}
        </ul>
        {isPastDate(date)? null : <NewPurpose form={dateToString(date)}/>}
        {/*{isPastDate(date)? null : <button type='button' className='btn btn-outline-primary btn-lg btn-block'>+</button>}*/}
      </div>
    );
  }
}


function mapStateToProps(state,ownProps){
  return {purposes: state.purposes[dateToString(ownProps.date)]};
}

export default connect(mapStateToProps)(DailyPurpose);

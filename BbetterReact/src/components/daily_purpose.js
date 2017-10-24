import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {dateToString, isPastDate, isFutureOrPresentDate} from '../utils/date_utils';
import NewPurpose from './new_purpose';
import Purpose from './purpose';
import {fetchPurposes} from '../actions';

class DailyPurpose extends Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    const {date}=this.props;
    if(!this.props.purposes){
      this.props.fetchPurposes(date.getFullYear(),date.getMonth()+1,date.getDate());
    }

  }

  toggleCheckboxChange (event){
    console.log(event);
  }

  renderPurposes(){
    return _.map(this.props.purposes, (p) => {
      return (
        <Purpose key={p.id} data={p} />
      );
    });
  }



  render(){
    const {date}=this.props;
    const {context}=this.props;

    return (
      <div><h3><span className='text-muted'>{this.props.date.getMonth()+1}/</span>{date.getDate()}</h3>
        <ul className='list-group'>
          {this.renderPurposes()}
        </ul>
        {isPastDate(date)? null : <NewPurpose form={context} date={date} />}
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {purposes: state.purposes[dateToString(ownProps.date,'-')]};
}

export default connect(mapStateToProps, {fetchPurposes})(DailyPurpose);

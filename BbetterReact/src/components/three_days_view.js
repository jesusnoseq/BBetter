import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import DailyPurpose from './daily_purpose';
import MonthlyPurpose from './montly_purpose';

import {addDays, constructDate, dateToString} from '../utils/date_utils';

class ThreeDaysView extends Component{
  constructor(props){
    super(props);
    this.state={year:0, month:0, day:0, date:new Date()};
  }

  componentDidMount(){
    this.updateState(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.updateState(nextProps);
  }

  updateState(myProps){
    let currentDate = new Date();
    let {day, month, year} = myProps.match.params;
    const inputDate = constructDate(year, month, day);

    if (day && month && year && inputDate) {
      currentDate = inputDate;
    }else{
      day = currentDate.getDate(),
      month = currentDate.getMonth()+1, //January is 0!
      year = currentDate.getFullYear();
    }

    this.setState({year, month, day, date: currentDate});
  }


  render(){
    const {year, month, day, date} = this.state;

    const previousDay = addDays(date, -1);
    const nextDay = addDays(date, +1);

    const linkToPreviousDay = `/${dateToString(previousDay, '/')}`;
    const linkToNextDay = `/${dateToString(nextDay, '/')}`;

    return (
      <div className='container'>

        <div className='row'>
          <div className='col-sm-6'>
            <Link to={linkToPreviousDay} className='btn btn-default float-left'>Previous</Link>
          </div>
          <div className='col-sm-6'>
            <Link to={linkToNextDay} className='btn btn-default float-right'>Next</Link>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-12 col-lg-12 margin-botton'>
            <MonthlyPurpose date={date} />
          </div>
          <div className='col-sm-12 col-lg-4'>
            <DailyPurpose date={previousDay} context='previousDay' />
          </div>
          <div className='col-sm-12 col-lg-4'>
            <DailyPurpose date={date} context='currentDay' />
          </div>
          <div className='col-sm-12 col-lg-4'>
            <DailyPurpose date={nextDay} context='nextDay' />
          </div>
        </div>{/**/}

      </div>
    );
  }

}


export default connect(null, null)(ThreeDaysView);

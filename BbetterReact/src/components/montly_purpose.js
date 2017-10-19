import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class MonthlyPurpose extends Component{
  constructor(props){
    super(props);
    //props.day
    //this.state={day:''};
  }

  render(){
    const month = this.props.date.getMonth();
    return (<div className='center-block'><h2 className='text-center'><span className='text-muted'>Month:</span> {month}</h2></div>);
  }
}


function mapStateToProps(state,ownProps){
  //return {monthlyPurpose: state.purposes.monthly};
}

export default connect(null,null)(MonthlyPurpose);

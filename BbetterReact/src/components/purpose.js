import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



class Purpose extends Component{
  render(){
    return (
      <div>
        Purpose
        {props.description}
      </div>
    );
  }


}


//function mapStateToProps({posts},ownProps){
  //return {posts}
  //return {purpose: posts[ownProps.match.params.id]};
//}

export default connect()(Purpose);

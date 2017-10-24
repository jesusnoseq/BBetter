import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {dateToString, isPastDate, isFutureDate} from '../utils/date_utils';
import {createPurpose} from '../actions';

class NewPurpose extends Component{
  renderTextAreaField(field){
    const {meta: {touched, error}} = field;
    const fieldDivClassName=`form-group ${touched && error?'has-danger':''}`;

    return (
      <div className={fieldDivClassName}>
        <textarea
          className="form-control"
          rows={field.rows}
          placeholder={field.placeholder}
          {...field.input}
        />
      </div>
    );
  }

  onFormSubmit(values){
    values.date=dateToString(this.props.date, '-');
    values.completed=false;
    this.props.createPurpose(values);

    this.props.reset();
  }

  renderAddForm(){
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <Field
          name='description'
          rows='3'
          placeholder='Your new purpose'
          component={this.renderTextAreaField}
        />
        <button type='submit' className='btn btn-primary btn-lg btn-block'>Let's do this!</button>
      </form>
    );
  }

  render(){
    return this.renderAddForm();
  }
}

function validate(values){
  const errors={};
  if(!values.description){
    errors.description='Enter a description';
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNewPurpose',
  validate
})(
  connect(null,{createPurpose})(NewPurpose)
);

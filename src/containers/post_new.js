import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { createPost } from '../actions';

class Postnew extends React.Component {
    constructor(props) {
        super(props)
    }

    renderField = (field) => {
        const {meta : {touched, error}} = field;
        let classes = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={classes}>
                <label>{field.label}
                </label>
                <input className='form-control' type='text' {...field.input}/>
                <div className='text-help'>
                {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit = (values) => {
        this.props.createPost(values,()=>{
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field label='Title For Post' name="title" component={this.renderField}/>
                <Field label='Categories' name="categories" component={this.renderField}/>
                <Field label='Post Content' name="content" component={this.renderField}/>
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link to='/' className='btn btn-danger'>Cancel</Link>
            </form>
        );
    }
}

//validation
function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter a category";
    }
    if (!values.content) {
        errors.content = "Enter a content";
    }
    //if error object is empty, form is good to submit.
    //if errors have *any* properties, redux assumes from is invalid.
    return errors;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createPost : createPost}, dispatch);
}

export default reduxForm({form: 'PostsNewForm', validate: validate})(connect(null, mapDispatchToProps)(Postnew))
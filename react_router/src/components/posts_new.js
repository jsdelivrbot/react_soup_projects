import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component {

    render() {
        return (
            <form>
                <Field name="title" label="Title for Post" component={this.renderField}/>
                <Field name="categories" label="Categories" component={this.renderField}/>
                <Field name="content" label="Post Content" component={this.renderField}/>
            </form>
        );
    }

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }
}

function validate() {

}

export default reduxForm({validate, form: 'PostsNewForm'})(PostsNew);
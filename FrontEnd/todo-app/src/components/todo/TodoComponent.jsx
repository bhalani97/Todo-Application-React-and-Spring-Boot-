import React, { Component } from "react";
import Todo from "./TodoApp";
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoDataService from './../../api/todo/TodoDataService.js'
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            desc: '',
            targetDate: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    componentDidMount() {
        let user = AuthenticationService.getLoggedInUser()

        if (this.state.id == -1) {
            return
        }
        TodoDataService.retriveTodo(user, this.state.id)
            .then(response => this.setState({
                desc: response.data.desc,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')

            }))
        //.catch(console.log('Divyesh'))
    }

    onSubmit(values) {
        let user = AuthenticationService.getLoggedInUser()
        let todo = {
            id: this.state.id,
            desc: values.desc,
            targetDate: values.targetDate
        }
        if (this.state.id === -1) {
            TodoDataService.createTodo(user, todo)
                .then(() => this.props.history.push('/todos'))
        }
        else {
            TodoDataService.updateTodo(user, this.state.id, todo)
                .then(() => this.props.history.push('/todos'))

        }

    }
    validate(values) {
        let errors = {}
        if (!values.desc) {
            errors.desc = 'Enter Description'
        }
        else if (values.desc.length < 5) {
            errors.desc = 'Enter more then 5 characters'
        }

        if (!(moment(values.targetDate)).isValid()) {
            errors.targetDate = 'Enter proper target date'
        }

        return errors
    }

    render() {
        let { desc, targetDate } = this.state;

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={{ desc, targetDate }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="desc" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="desc">

                                        </Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>TargetDate</label>
                                        <Field className="form-control" type="date" name="targetDate">

                                        </Field>
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>

                            )}
                    </Formik>
                </div>

            </div>
        )
    }
}

export default TodoComponent 
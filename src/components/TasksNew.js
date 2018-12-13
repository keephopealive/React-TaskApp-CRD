import React, { Component } from 'react';

class TasksNew extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) { 
        console.log(e.target.value);
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTask( {title: this.state.title, description: this.state.description} );
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <h3>TaskNew</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default TasksNew;

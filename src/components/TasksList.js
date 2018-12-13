import React, { Component } from 'react';

class TasksList extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        const tasks = this.props.tasks.map( (task, index) => {
            return (
                <li key={index}> 
                    {task.title} - 
                    {task.description} - 
                    <button onClick={()=>{ this.props.destroyTask(index) }}>Delete</button>
                </li>
            )
        });

        return (
            <div>
                <h3>TaskList</h3>
                <ul>
                    {tasks}
                </ul>
            </div>
        );
    }
}

export default TasksList;

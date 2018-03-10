import React, {Component} from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TaskTableComponent from '../components/TaskTableComponent';

class TaskTableContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tasks : []
        }
    }



    componentWillMount() {


    }

    componentDidMount(){
        axios
        .get(`http://localhost:8080/task/all`)
        .then(response => this.setState({ tasks: response.data }))
        .catch(err => console.log(err))
       
    }

    render(){
      return <TaskTableComponent tasks={this.state.tasks} />  
    }
}

export default TaskTableContainer;
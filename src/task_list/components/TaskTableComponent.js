import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class TaskTableComponent extends React.Component{
    constructor(props){
        super(props);

        this.drawRow = this.drawRow.bind(this);
    }

    drawRow(task) {
        let rows = []
        this.props.tasks.map(item =>{
            rows.push(<TableRow>
                  <TableRowColumn>{item.taskType}</TableRowColumn>
                  <TableRowColumn>{item.description}</TableRowColumn>
                  <TableRowColumn>{item.detail}</TableRowColumn>
          </TableRow>)
        })
        return rows;
    }

    render(){
        return <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Tipo</TableHeaderColumn>
                    <TableHeaderColumn>Descripcion</TableHeaderColumn>
                    <TableHeaderColumn>Detalle</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                   this.drawRow(null)
             
                }
            </TableBody>
      </Table>
    }
}


export default TaskTableComponent;
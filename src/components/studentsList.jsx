import React, { Component } from 'react';

class StudentsList extends Component {
    state = { 
        list: [
            { id: 1, name: "Nidhi" },
            { id: 2, name: "Siddhi" },
        ]
     } 
    render() { 
        return (
            <div>
                { this.state.list.map( student => (
                    <div>
                        <span>{ student.name }</span>
                    </div>
                ))}
            </div>
        );
    }
}
 
export default StudentsList;
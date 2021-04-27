import React from "react";

const Overview = (props) => {
    const {tasks, func} = props;

    return (
        <ul>
            {
                tasks.map(task => {
                    return (<li key = {task.id}>{task.text}<button className='delete-btn' id = {task.id} onClick={func}>-</button></li>)
                })
            }
        </ul>
    );

};

export default Overview;
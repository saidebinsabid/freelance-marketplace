import React from 'react';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {
    const {title} = useLoaderData();
    console.log(title);
    return (
        <div>
            <h1>Task Detail</h1>
        </div>
    );
};

export default TaskDetails;
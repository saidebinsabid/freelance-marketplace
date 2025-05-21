import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyTask = () => {
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:3000/myTasks?email=${user.email}`)
            .then((res) => res.json())
            .then((data)=> {
                console.log(data);
            })
        }

    }, [user])
    return (
        <div>
            <h1>My Task</h1>
        </div>
    );
};

export default MyTask;
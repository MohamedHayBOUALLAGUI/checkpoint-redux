import React from 'react'
import {useSelector} from 'react-redux';
import Task from '../Task/Task.js'


function ListTasks() {
   
        const tasks = useSelector(state => state.tasksList)
        return (
            
        <div>
        {tasks.map((task,i)=>
        <Task key={i} todotsk={task}/>)}
        </div>
    )
}

export default ListTasks

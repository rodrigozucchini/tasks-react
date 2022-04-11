import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log("Tarea Creada");
        return () => {
        console.log(`Tarea ${task.name} borrada`);
        };
    }, [task]);

    //Function que devuelve retorno Badge depende del nivel de task
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:  
                return(<h6 className="Nd-0">
                    <span className="badge bg-primary">
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENTE:  
            return(<h6 className="Nd-0">
                <span className="badge bg-warning">
                    {task.level}
                </span>
            </h6>)
            case LEVELS.BLOQUEANTE:  
            return(<h6 className="md-0">
                <span className="badge bg-danger">
                    {task.level}
                </span>
            </h6>)
            default:
                break;
        }
    }

    function taskCompletedIcon() {
        if (task.completed) {
            return <i onClick={()=>complete(task)} className="bi-toggle-on task-action" style={{color: "green"}}></i>
        } else {
            return <i onClick={()=>complete(task)} className="bi-toggle-off task-action" style={{color: "grey"}}></i>
        }
    }

    const taskCompleted = {
        fontWeight: "bold",
        color: "gray",
        textDecoration: "line-through"
    }
    
    const taskPending = {
        fontWeight: "bold",
        color: "tomato"
    }

  return (
    <tr className="fw-normal" style={task.completed ? taskCompleted : taskPending}>
        <th>
            <span className="ms-2">{ task.name }</span>
        </th>
        <td className="align-middle">
            <span>{ task.description }</span>
        </td>
        <td className="align-middle">
            {/*Ejecucion de la funcion que retorna elementos del badge*/}
            { taskLevelBadge() }
        </td>
        <td className="align-middle">
            {/*Funcion que retorna iconos que dependen de estar completa la tarea*/}
            { taskCompletedIcon() }
            <i className="bi-trash task-action" style={{color: "tomato"}} onClick={()=>remove(task)}></i>
        </td>
    </tr>
  );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;

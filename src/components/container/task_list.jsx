import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import Taskform from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask1 = new Task('Ejemplo 1', 'Descripcion 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Ejemplo 2', 'Descripcion 2', false, LEVELS.URGENTE)
    const defaultTask3 = new Task('Ejemplo 3', 'Descripcion 3', false, LEVELS.BLOQUEANTE)

    const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control ciclo de vida del componente
    useEffect(() => {
        console.log("Modificacion de tasks");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
        console.log("Desaparicion de tasks");
        };
    }, [tasks]);

    function completeTask(task) {
        console.log("Completar tarea")
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed
        //Añadir la actualizacion del estado y actualizo la iteraccion
        setTasks(tempTasks)
    }

    function deleteTask(task) {
        console.log("Borrar tarea")
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log("Añadir tarea tarea")
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Prioridad</th>
                    <th scope="col">Acciones</th>
                </tr>
                </thead>
                <tbody>
                    {/*TODO iterar sobre una lista de tareas */}
                    { tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                                key={ index } 
                                task={ task }
                                complete={completeTask}
                                remove={deleteTask}
                                >
                            </TaskComponent>
                        )
                    }
                    )}
                </tbody>
            </table>
        )
    }

    let tasksTable;

    if(tasks.length > 0){
        tasksTable = <Table></Table> 
    } else {
        tasksTable = (
        <div>
        <h3>No hay tareas cargadas...</h3>
        <h4>Por favor, crea una</h4>
        </div>
        )
    }

    const loadingStyle = {
        color: "grey",
        fontSize: "30px",
        fontWeight: "bold"
    }

    return (
        <div>
            <div className="col-12">
                <div className="card">
                    {/*Card Header (title)*/}
                    <div className="card-header p-3">
                        <h5>
                            Tus Tareas:
                        </h5>
                    </div>
                    {/*Card Body (content)*/}  
                    <div className="card-body" data-mdb-perfect-crollbar="true" style={ {position: "relative", height: "400px"} }>
                    {/* TODO agregar loading SPINER */}
                    {loading ? <p style={loadingStyle}>Cargando tareas</p> : tasksTable  }
                    </div>
                </div>
            </div>
            <Taskform add={addTask} length={tasks.length}></Taskform>
        </div>
    );
};

export default TaskListComponent;

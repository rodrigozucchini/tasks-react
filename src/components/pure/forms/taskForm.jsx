/* eslint-disable no-undef */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class'

const Taskform = ({add, length}) => {
    
    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,
        );
        add(newTask); 
    }

    const normalStyle = {
        color: "#0d6efd",
        fontWeight: "bold"
    }
    

    const urgenteStyle = {
        color: "#ffc107",
        fontWeight: "bold"
    }

    
    const bloqueoStyle = {
        color: "#dc3545",
        fontWeight: "bold"
    }

    return (
        <form onSubmit={addTask} className="d-flex justify-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
                <input ref={nameRef} id="inputName" type="text" className="form-control form-control-lg" required autoFocus placeholder='Nombre de la tarea'/>
                <input ref={descriptionRef} id="inputName" type="text" className="form-control form-control-lg" required placeholder='Descripción de la tarea'/>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel" className="form-control form-control-lg">
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgenteStyle} value={LEVELS.URGENTE}>
                        Urgente
                    </option>
                    <option style={bloqueoStyle} value={LEVELS.BLOQUEANTE}>
                        Bloqueante
                    </option>
                </select>
                <button type="submit" className="btn btn-success btn-lg ms-2">{length > 0 ? "Añadir tarea" : "Crea la primera tarea"}</button>
            </div>
        </form>
    );
}

Taskform.ProtoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;

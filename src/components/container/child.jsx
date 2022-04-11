import React,{ useRef } from 'react';

const Child = ({ name, send, update }) => {
    


    const messageRef = useRef("")
    const nameRef = useRef("")

    function pressButon() {
        const text = messageRef.current.value;
        alert(`Texto en input ${text}`);
    }

    function pressButonParams(text) {
        alert(`Texto: ${text}`);
    }


    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }
    
    return (
        <div style={{background: "yellow", padding: "30px"}}>
            <p onMouseOver={()=> console.log("Mouse Over")}>Hello,{name}</p>
            <button onClick={()=> console.log("Presionar boton 1")}>
                Botón 1 
            </button>
            <button onClick={pressButon}>
                Botón 2 
            </button>
            <button onClick={pressButonParams("Hello")}>
                Botón 3 
            </button>
            <input 
                placeholder = "Envia texto al padre"
                onFocus={()=> console.log("Input Focus")}
                onChange={(e)=> console.log("Input Change", e.target.value)}
                onCopy={()=> console.log("Copiaste texto del input")}
                ref={messageRef}
                >
            </input>
            <button onClick={()=> send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop:"20px"}}>
                <form onSubmit={submitName}>
                <input ref={nameRef} placeholder='NewName'/>
                <button type="Submit">Actualizar nombre</button>
                </form>
            </div>
        </div>
    );
}

export default Child;

import React, {useContext, useEffect, useState} from 'react'
import InstrumentoContext from './../context/instrumentos/InstrumentoContext'

export default function Instrumentos() {
    const context = useContext(InstrumentoContext)
    const {
        instrumentos,
        obtenerInstrumentos,
        crearInstrumento,
        editarProyectoState,
        borrarInstrumentoState
    } = context
    // useState
    const [nuevoInstrumento, setNuevoInstrumento] = useState({
        nombre:"",
        precio:0
    })
    const [ modoEdicion, setModoEdicion ] = useState(false)
    useEffect(() => {
        obtenerInstrumentos()
    }, [])

    // Funciones
    const manejarCambios = (event) => {
        event.preventDefault()
        setNuevoInstrumento({
            ...nuevoInstrumento,
            [event.target.name]: event.target.value
        })
    }
    const enviarFormulario = (event) => {
        event.preventDefault()
        crearInstrumento(nuevoInstrumento)
        setNuevoInstrumento({
            nombre:"",
            precio:0
        })
    }
    // Edición
    const activarModoEdicion = (event, element) => {
        event.preventDefault()
        setModoEdicion(true)
        setNuevoInstrumento(element)
    }
    const editarInstrumento = (event) => {
        event.preventDefault()
        editarProyectoState(nuevoInstrumento)
        setModoEdicion(false)
        setNuevoInstrumento({
            nombre:"",
            precio:0
        })
    }
    // Borrar
    const borrarInstrumento = (event, element) => {
        event.preventDefault()
        borrarInstrumentoState(element)
    }
    return (
        <div>
            <h3>Buy an Instrument</h3>
            <hr />
            <form onSubmit={modoEdicion ?
            (e) => editarInstrumento(e) :
            (e)=> enviarFormulario(e)
            }>
            <input 
                name="nombre"
                type="text"
                placeholder="Name"
                value={nuevoInstrumento.nombre}
                onChange={(e) => { manejarCambios(e) }}
            />
            <input 
                name="precio"
                type="number"
                placeholder="Number"
                value={nuevoInstrumento.precio}
                onChange={(e) => { manejarCambios(e) }}
            />
            <button>{modoEdicion ? "Edit Instrument" :"Create Instrument"}</button>
            </form>
            {
                instrumentos.map((instrumento,i) => {
                    return (
                        <div key={i}>
                            <h4>Instrument: {instrumento.nombre}</h4>
                            <p>Price: {instrumento.precio}</p>
                            <button onClick={(e) => activarModoEdicion(e, instrumento)}>Edit</button>
                            <button onClick={(e) => {
                                borrarInstrumento(e, instrumento)
                            }}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

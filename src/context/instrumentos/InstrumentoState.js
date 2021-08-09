import React, { useReducer } from 'react'
import InstrumentoContext from './InstrumentoContext'
import InstrumentoReducer from './InstrumentoReducer'

import axios from 'axios'

const InstrumentoState = (props) => {

    // 1. ESTADO INICIAL
    // SIEMPRE HAGAN UN OBJETO

    const initialState = {
        instrumentos: [
            { 
                _id: '',
                nombre: "Instrumento 0",
                precio: 0,
            }
        ]
    }


    // 2. DISPATCHING Y REDUCERS
    const [ globalState, dispatch ] = useReducer(InstrumentoReducer, initialState)


    // 3. FUNCIONES 
    // NOS VAN A AYUDAR A CAPTURAR LOS EVENTOS DE LOS COMPONENTES

    const obtenerInstrumentos = async () => {
        try {
            const respuesta = await axios.get("http://localhost:3005/api/instrumentos")
            const instrumentosActualizados = respuesta.data
            dispatch({
                type: "OBTENER_INSTRUMENTOS",
                payload: instrumentosActualizados
            })

        } catch (error) {
            console.log(error)
        }
    }
    const crearInstrumento = async (dataForm) => {
        try {
            
            const res = await axios.post("http://localhost:3005/api/instrumentos/crear", dataForm)

            obtenerInstrumentos()

        } catch (error) {
            
        }
    }
    const editarProyectoState = async (dataForm) => {
        try {
            const res = await axios.post('http://localhost:3005/api/instrumentos/actualizar', dataForm)
            obtenerInstrumentos()
        }
        catch (error) {
            console.log(error)
        }
    }
    const borrarInstrumentoState = async (dataForm) => {
        try {
            const res = await axios.post('http://localhost:3005/api/instrumentos/eliminar', dataForm)
            obtenerInstrumentos()
        }
        catch (error) {
            console.log(error)
        }
    }
    // 4. RETORNO DE ESTADO GLOBAL
    return (
        <InstrumentoContext.Provider
            value={{
                instrumentos: globalState.instrumentos,
                obtenerInstrumentos,
                crearInstrumento,
                editarProyectoState,
                borrarInstrumentoState
            }}
        >

            { props.children }            

        </InstrumentoContext.Provider>
    )

}


export default InstrumentoState
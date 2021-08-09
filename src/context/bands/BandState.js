import {useReducer} from 'react';
import BandContext from './BandContext'
import BandReducer from './BandReducer'

import axios from 'axios'

const BandState = (props) => {
    // Initial state
    const initialState = {
        bands: [],
    }
    // Hook reducer
    const [globalState, dispatch] = useReducer(BandReducer, initialState)

    // FUNCIONES
    const getBand = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/rockbands`)
            const bandas = res.data
            dispatch({
                type: 'SET_BANDS',
                payload: bandas
            })
        } catch (e) {
            console.log(e)
        }
        
    }
    // Retorno del estado global
    return (
        <BandContext.Provider value={{
            band: globalState.bands,
            getBand
        }}>
            {props.children}
        </BandContext.Provider>
    )
}

export default BandState
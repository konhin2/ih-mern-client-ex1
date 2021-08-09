// REDUCER - ES UNA FUNCIÓN AUTORIZADA QUE ALTERA EL ESTADO GLOBAL

export default (globalState, action) => {
    switch (action.type) {
        case "OBTENER_INSTRUMENTOS":
            return {
                ...globalState,
                instrumentos: action.payload
            }
        default:
            return globalState;
    }
}
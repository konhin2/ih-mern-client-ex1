// REDUCER - ES UNA FUNCIÓN AUTORIZADA QUE ALTERA EL ESTADO GLOBAL

const reducer = (globalState, action) => {
    switch (action.type) {
        case "OBTENER_PROYECTOS":
            return {
                ...globalState,
                proyectos: action.payload
            }
        default:
            return globalState;
    }
}
export default reducer
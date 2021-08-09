export default (globalState, action) => {
    switch (action.type) {
        case 'SET_BANDS':
            return {
                ...globalState,
                bands: action.payload
            }
        default:
            return globalState
    }
}
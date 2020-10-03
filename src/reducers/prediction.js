const prediction = (state = '', action) => {
    switch(action.type){
        case 'HAZARD_PREDICT':
            return action.text //TODO: add hazard as new id in the store
        default:
            return state
    }
}
export default prediction
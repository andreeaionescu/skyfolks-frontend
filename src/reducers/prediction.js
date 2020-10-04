const prediction = (state = [], action) => {
    switch(action.type){
        case 'ADD_HAZARD_1':
            return [...state, 
            {id: Math.random(), 
                latitude: action.data.latitude, 
                longitude: action.data.longitude, 
                hazardType: "hurricane",
                name: "Hurricane Predict " + (action.data.predicted[0].probability * 100).toString() + "%",
                predicted: [
                    {
                        hazardType: "hurricane",
                        probability: (action.data.predicted[0].probability * 100).toString() + "%"
                    }
                ]
            }]
        default:
            return state
    }
}
export default prediction
const analytics = (state = [], action) => {
    switch (action.type) {
      case 'RECEIVE_ALL_HAZARDS':
        return Object.assign({}, action.data)
      case 'ADD_HAZARD':
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
      case 'TOGGLE_ANALYTICS_HAZARD':
        return state.map( hazard =>
          hazard.id === action.id ? Object.assign({}, hazard, { selected: !hazard.completed }) : hazard)
      case 'ANALYTICS_BY_HAZARD':
        let id = action.data['id']
        return Object.assign({}, state, {
          [id]: Object.assign({}, state[id], {
              'selected': true,
              'latitude': action.data['latitude'], 
              'longitude': action.data['longitude'],
              'hazardType': action.data['hurricane'],
              'name': action.data['name'],
              'imageURL': action.data['imageURL'],
              'analytics': action.data['analytics'].map(item => Object.assign({}, item))
            })
        })
      default:
        return state
    }
  }
  export default analytics
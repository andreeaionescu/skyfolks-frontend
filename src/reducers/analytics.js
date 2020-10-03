const analytics = (state = {}, action) => {
    switch (action.type) {
      case 'RECEIVE_ALL_HAZARDS':
        return Object.assign({}, action.data)
      case 'ANALYTICS_BY_HAZARD':
        let id = action.data['id']
        return Object.assign({}, state, {
          [id]: Object.assign({}, state[id], {
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
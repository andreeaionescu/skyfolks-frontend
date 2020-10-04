const URL = 'http://192.168.1.87:8777'

export const predictHazard = data => ({
    type: 'HAZARD_PREDICT',
    data
})

export const addHazard = data => ({
  type: 'ADD_HAZARD',
  data
})


export const receiveError = err => ({
    type: 'RECEIVE_ERROR',
    err
})

export const predictHazardActionCreator = ({latitude, longitude, predict}) => {
    console.log('Predict hazard based on lat & lng: ', `${latitude} ${longitude}`)
    return function(dispatch, getState) {
      let headers = new Headers({'Content-Type': 'application/json'})
    
      let request = {
        method: 'POST',
        headers: headers,
        url: URL + `/hazard/predict`,
        body: JSON.stringify({latitude, longitude, predict}),
        mode: 'cors'
      }
  
      return fetch(URL + `/hazard/predict`, request)
      .then(response => response.json())
      .then(data => {
          console.log('Predicted data: ', data)
            dispatch(addHazard(data))
          })
      
      .catch(err => dispatch(receiveError(err)));
  
    };
  };
const URL = ''

export const predictHazard = data => ({
    type: 'HAZARD_PREDICT',
    data
})

export const predictHazardActionCreator = ({lat, lon, predict}) => {
    console.log('Predict hazard based on lat & lon: ', lat, lon)
    return function(dispatch, getState) {
      let headers = new Headers({'Content-Type': 'application/json'})
    
      let request = {
        method: 'POST',
        headers: headers,
        url: URL + `/hazard/predict`,
        body: JSON.stringify({lat, lon, predict}),
        mode: 'cors'
      }
  
      return fetch(URL + `/hazard/predict`, request)
      .then(response => response.json())
      .then(data => {
            dispatch(predictHazard(data))
          })
      .catch(err => dispatch(receiveError(err)));
  
    };
  };
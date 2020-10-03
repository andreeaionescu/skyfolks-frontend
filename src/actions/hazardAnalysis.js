const URL = '/hazards'

export const receiveHazards = hazards => ({
    type: 'RECEIVE_ALL_HAZARDS',
    data: hazards
})

export const receiveHazardAnalyticsById = data => ({
    type: 'ANALYTICS_BY_HAZARD',
    data
})

export const receiveError = err => ({
    type: 'RECEIVE_ERROR',
    err
})

export const fetchHazardsActionCreator = () => {

    return function(dispatch, getState) {
        let headers = new Headers({'Content-Type': 'application/json'})

        let request = {
        method: 'GET',
        headers: headers,
        url: URL,
        mode: 'cors'
        }

        return fetch(URL, request)
        .then(response => response.json())
        .then(data => {
            dispatch(receiveHazards(data))
            })
        .catch(err => dispatch(receiveError(err)));

    };
};

export const fetchHazardAnalyticsByIdActionCreator = id => {
    console.log('Retrieveing hazard analytics by id: ', id)
    return function(dispatch, getState) {
      let headers = new Headers({'Content-Type': 'application/json'})
    
      let request = {
        method: 'POST',
        headers: headers,
        url: URL + `/${id}`,
        body: JSON.stringify({'id': id}),
        mode: 'cors'
      }
  
      return fetch(URL + `/${id}`, request)
      .then(response => response.json())
      .then(data => {
            dispatch(receiveHazardAnalyticsById(data))
          })
      .catch(err => dispatch(receiveError(err)));
  
    };
};
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/';

const initialState = { 
    analytics: [
        {
            id: "1",
            latitude: 14.021,
            longitude: -124.034,
            hazardType: "hurricane",
            name: "Cyclone Ema in 2015"
        },
        {
            id: "2",
            latitude: 85.021,
            longitude: 44.034,
            hazardType: "hurricane",
            name: "Tornado Thor in 2010"
        },
        {
            id: "3",
            latitude: -85.021,
            longitude: 124.034,
            hazardType: "wildfire",
            name: "Forest widlfire in Brazil"
        }
    ]
  };

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)

export default store;
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/';

export const initialState = { 
    analytics: [
        {
            id: "1",
            selected: false,
            latitude: -9.3733,
            longitude: -73.0801,
            hazardType: "wildfire",
            name: "Wildfire in Peru"
        },
        {
            id: "2",
            selected: false,
            latitude: 51.5658,
            longitude: 38.6128,
            hazardType: "wildfire",
            name: "Ukraine Wildfire"
        },
        {
            id: "3",
            selected: false,
            latitude: 20,
            longitude: -127,
            hazardType: "hurricane",
            name: "Hurricane Maria",
            imageURL: "src/modis_hazard_load.png", //"http://localhost:8888/images/hurricane-id-1.png",
            analytics:[
                {
                    analyticType: "barchart",
                    title: "Death Rate / Day",
                    data: {
                        columns: [
                            {
                                columnName: "Damage in Dollars",
                                columnType: "Double",
                            },
                            {
                                columnName: "Day",
                                columnType: "Date",
                                dateFormat: "dd-mm-yyyy"
                            } 
                        ],
                        rows: [
                            [ 8.4, "21-07-2020" ],
                            [ 12.4, "21-07-2020" ],
                            [ 3, "21-07-2020" ],
                            [ 6.5, "21-07-2020" ],
                            [ 10.2, "21-07-2020" ]                    
                        ]
                    }
                },
        
                {
                    analyticType: "barchart",
                    title: "Damage in $ millions / Day",
                    data: {
                        columns: [
                            {
                                columnName: "Damage in Dollars",
                                columnType: "Double",
                            },
                            {
                                columnName: "Day",
                                columnType: "Date",
                                dateFormat: "dd-mm-yyyy"
                            } 
                        ],
                        rows: [
                            [ 8.4, "21-07-2020" ],
                            [ 12.4, "21-07-2020" ],
                            [ 3, "21-07-2020" ],
                            [ 6.5, "21-07-2020" ],
                            [ 10.2, "21-07-2020" ]                    
                        ]
                    }
                },
                
                {
                    analyticType: "tabularData",
                    title: "Damage in Dollars per Day",
                    data: {
                        columns: [
                            {
                                columnName: "Damage in Dollars",
                                columnType: "Double",
                            },
                            {
                                columnName: "Day",
                                columnType: "Date",
                                dateFormat: "dd-mm-yyyy"
                            } 
                        ],
                        rows: [
                            [ 8.4, "21-07-2020" ],
                            [ 12.4, "21-07-2020" ],
                            [ 3, "21-07-2020" ],
                            [ 6.5, "21-07-2020" ],
                            [ 10.2, "21-07-2020" ]                    
                        ]
                    }
                }
            ]
        },
        {
            id: "4",
            selected: false,
            latitude: 47.244,
            longitude: -122.21,
            hazardType: "wildfire",
            name: "Tacoma, Washington"
        },
        {
            id: "5",
            selected: false,
            latitude: 37.8250,
            longitude: 23.9772,
            hazardType: "wildfire",
            name: "Feriza, Kamariza, Greece"
        },
        {
            id: "6",
            selected: false,
            latitude: 38.7128,
            longitude: -122.3021,
            hazardType: "wildfire",
            name: "Napa County, California"
        },
        {
            id: "8",
            selected: false,
            latitude: 36.1772,
            longitude: -121.606,
            hazardType: "wildfire",
            name: "Monterey County, California"
        },
        {
            id: "9",
            selected: false,
            latitude: 32.8725,
            longitude: -116.76,
            hazardType: "wildfire",
            name: "National City, California"
        },
    ],
    prediction: []
  };

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
);
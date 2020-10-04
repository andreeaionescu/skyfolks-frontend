import React from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';
import Marker from './../components/Marker.js';
import { toggleAnalyticsHazard, fetchHazardsActionCreator, fetchHazardAnalyticsByIdActionCreator } from '../actions/hazardAnalysis.js';
import { predictHazardActionCreator } from '../actions/predictHazard.js'

class MapSection extends React.Component {
    
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
        this.apiIsLoaded = this.apiIsLoaded.bind(this);
        this.getMapBounds = this.getMapBounds.bind(this);
        this.bindResizeListener = this.bindResizeListener.bind(this);
        this.handleOnMarkerClick = this.handleOnMarkerClick.bind(this);
      }
    

    handleOnClick({x, y, lat, lng, event}){
        let latitude = lat
        let longitude = lng
        event.preventDefault();
        console.log(x, y, latitude, longitude, event)
        let predict = ["hurricane"]
        this.setState({newPredict: {latitude: latitude, longitude: longitude, predict: predict}});
        this.props.handlePredictHazard({latitude, longitude, predict})
        //this.props.addHazard({latitude, longitude})
    }

    // Return map bounds based on list of places
    getMapBounds(map, maps, places){
        const bounds = new maps.LatLngBounds();
    
        places.forEach((place) => {
        bounds.extend(new maps.LatLng(
            place.latitude,
            place.longitude,
        ));
        });
        return bounds;
    };
    
    // Re-center map when resizing the window
    bindResizeListener(map, maps, bounds){
        maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
        });
        });
    };
    
    // Fit map to its bounds after the api is loaded
    apiIsLoaded(map, maps, places){
        // Get bounds by our places
        const bounds = this.getMapBounds(map, maps, places);
        // Fit map to bounds
        map.fitBounds(bounds);
        // Bind the resize listener
        this.bindResizeListener(map, maps, bounds);
    };

    handleOnMarkerClick(marker){
        // event.preventDefault();
        // console.log(marker)
         // this.props.handleToggle(marker.id)
        // this.props.updateSelectedMarker(marker)
        // this.props.handleHazardAnalyticsById(marker)
        
    }

    render() {
        return (
            <div style={{ height: "100vh", width: "100%"}}>
            <GoogleMap
            bootstrapURLKeys={{ key: "AIzaSyCov8v3MgRCgus3iEvMEmtUoN2jmswptbw" }}
            defaultCenter={{
                lat: 51.5074,
                lng: 0.1278
            }}
            defaultZoom={1}
            options={{ 
                minZoom: 3,
                mapTypeId: "satellite",
                mapTypeControl: true,
                
                //fullscreenControl: false,
                // zoomControl: false,
                // streetViewControl: false,
                // scaleControl: true,
                
                //mapTypeControlOptions,
                //styles: [...administrative, ...landscape, ...poi, ...road, ...transit, ...water]
                
            }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps, this.props.analytics)}
            onClick={this.handleOnClick} 
            >  
                { this.props.analytics &&
                    this.props.analytics.map((marker, index) => (
                        <Marker 
                            key={marker.id}
                            lat={marker.latitude}
                            lng={marker.longitude}
                            name={marker.name}
                            hazardType={marker.hazardType}  
                            handleOnClick={this.handleOnMarkerClick(marker)}
                        />
                        ))
                }

            </GoogleMap>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { analytics: state.analytics, predict: state.predict };
}

const mapDispatchToProps = dispatch => ({
    handleAllHazards: () => dispatch(fetchHazardsActionCreator()),
    handleHazardAnalyticsById: id => dispatch(fetchHazardAnalyticsByIdActionCreator(id)),
    handlePredictHazard: ({latitude, longitude, predict}) => dispatch(predictHazardActionCreator({latitude, longitude, predict})),
    handleToggle: (id) => dispatch(toggleAnalyticsHazard(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MapSection)
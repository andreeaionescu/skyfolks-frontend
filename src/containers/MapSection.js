import React from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';
import Marker from './../components/Marker.js';
import { fetchHazardsActionCreator, fetchHazardAnalyticsByIdActionCreator } from '../actions/hazardAnalysis.js';

function MapSection(props) {
    
    const mapType = "satellite"
    const handleOnClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)

    const handleMultipleMarkers = ()  => 
        props.analytics.map((marker, index) => (
            <Marker 
                key={marker.id}
                lat={marker.latitude}
                lng={marker.longitude}
                name={marker.name}
                hazardType={marker.hazardType}  
            />
        ))
    const markers = handleMultipleMarkers()

    // Return map bounds based on list of places
    const getMapBounds = (map, maps, places) => {
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
    const bindResizeListener = (map, maps, bounds) => {
        maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
        });
        });
    };
    
    // Fit map to its bounds after the api is loaded
    const apiIsLoaded = (map, maps, places) => {
        // Get bounds by our places
        const bounds = getMapBounds(map, maps, places);
        // Fit map to bounds
        map.fitBounds(bounds);
        // Bind the resize listener
        bindResizeListener(map, maps, bounds);
    };

    return (
        <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          defaultCenter={{
            lat: 51.5074,
            lng: 0.1278
          }}
          defaultZoom={1}
          options={{ 
            minZoom: 3,
            mapTypeId: mapType,
            mapTypeControl: true,
            
            //fullscreenControl: false,
            // zoomControl: false,
            // streetViewControl: false,
            // scaleControl: true,
            
            //mapTypeControlOptions,
            //styles: [...administrative, ...landscape, ...poi, ...road, ...transit, ...water]
               
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, props.analytics)}
          onClick={handleOnClick} 
        >  
            {markers}

        </GoogleMap>
      </div>
    )
}

const mapStateToProps = (state) => {
    return { analytics: state.analytics, predict: state.predict };
}

const mapDispatchToProps = dispatch => ({
    handleAllHazards: () => dispatch(fetchHazardsActionCreator()),
    handleHazardAnalyticsById: id => dispatch(fetchHazardAnalyticsByIdActionCreator(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MapSection)
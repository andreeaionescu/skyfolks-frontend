import React from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';
import Marker from './../components/Marker.js';
import { fetchHazardsActionCreator, fetchHazardAnalyticsByIdActionCreator } from '../actions/hazardAnalysis.js';

function MapSection(props) {
    
    const mapType = "satellite"
    const handleOnClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)

    const handleMultipleMarkers = ()  => 
        props.analytics.map((item, index) => (
            <Marker 
                key={item.id}
                //position={{ lat: item.latitude, lng: item.longitude}}
                lat={item.latitude}
                lng={item.longitude}
                name={item.name}
                hazardType={item.hazardType}  
            />
        ))
    const markers = handleMultipleMarkers()

    return (
        <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyCov8v3MgRCgus3iEvMEmtUoN2jmswptbw" }}
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
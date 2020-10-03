import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js';

export default function WorldMap() {

    const mapType = "satellite"

    return (
        <div style={{ height: '92vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCov8v3MgRCgus3iEvMEmtUoN2jmswptbw" }}
          options={{ mapTypeId: mapType }}
          defaultZoom={1}
          defaultCenter={{
            lat: 51.5074,
            lng: 0.1278
          }}
          
        >
          <Marker
            lat={46.952653}
            lng={26.900636}
          />
        </GoogleMapReact>
      </div>
    )
}
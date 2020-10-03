import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js';

export default function WorldMap() {

    const mapType = "satellite"

    return (
        <div style={{ height: '92vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          yesIWantToUseGoogleMapApiInternals
          options={{ mapTypeId: mapType }}
          defaultCenter={{
            lat: 51.5074,
            lng: 0.1278
          }}
          defaultZoom={1}
        >
          <Marker
            lat={46.952653}
            lng={26.900636}
            text="Cordun"
          />
        </GoogleMapReact>
      </div>
    )
}
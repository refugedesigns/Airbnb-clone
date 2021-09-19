import { useState } from 'react';
import ReactMapGL, {Marker, Popup}  from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({searchResults}) => {
    const [selectedLocation, setSelectedLocation] = useState({})
    const geoData = searchResults.map(data => ({latitude: data.lat, longitude: data.long}))
    
    const center = getCenter(geoData)
    const [viewport, setViewport] = useState({
      width: "100%",
      height: "100%",
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11,
    });
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/erasmusantwi/cktqr8lan3gtu18pb1q3xp4mz"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {searchResults.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetTop={-10}
              offsetLeft={-20}
            >
              <p
                onClick={() => setSelectedLocation(result)}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>

            {selectedLocation.long === result.long ? (
                <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
                >
                    {result.title}
                </Popup>
            ): (false)}
          </div>
        ))}
      </ReactMapGL>
    );
}

export default Map

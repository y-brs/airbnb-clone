import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11
  })


  return (
    <ReactMapGL
      mapStyle="mapbox://styles/yarmulnik/cks4uaswj514d17q6ufnbjd99"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >

      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-12}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              role="img"
            >
              📍
            </p>
          </Marker>

          {/* Popup */}

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="font-medium text-sm cursor-pointer"
            >
              {result.price}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}

    </ReactMapGL>
  )
}

export default Map

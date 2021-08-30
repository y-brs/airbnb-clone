import { useState } from 'react'
import Image from "next/image"
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
import { StarIcon } from "@heroicons/react/solid"
import { HeartIcon } from "@heroicons/react/outline"

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
            offsetLeft={-11}
            offsetTop={-8}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer rounded-md w-10 pl-1 hover:animate-bounce"
              aria-label="push-pin"
              role="img"
            >
              <Image
                className="h-8 cursor-pointer z-1"
                src="/images/pin.png"
                width="15"
                height="26"
                onClick={() => {setSelectedLocation(result);}}
                alt="Map pin"
              />
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              className="rounded-2xl p-0 z-10"
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              closeButton={false}
              latitude={result.lat}
              longitude={result.long}
              // maxWidth={280}
            >
              <div className="p-1 pb-0 m-0 min-w-[280px] relative z-10 rounded-xl cursor-pointer">
                <div className="relative w-auto h-[150px] mb-2">
                  <Image
                    className="rounded"
                    src={result.img}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    alt={result.title}
                  />
                </div>
                <h4 className="text-md">{result.title}</h4>
                <div className="flex justify-between items-center relative">
                  <div>
                    <p className="text-md font-semibold">{result.price}</p>
                    <p className="cursor-pointer flex items-center text-sm">
                      <StarIcon className="h-5 text-red-500" />
                      {result.star}
                    </p>
                  </div>
                  <div className="p-2 absolute -bottom-1 -right-2 cursor-pointer rounded-full transition transform duration-200 hover:bg-gray-100">
                    <HeartIcon className="h-6" />
                  </div>
                </div>
              </div>
            </Popup>
          ) : (
            ""
          )}
        </div>
      ))}

    </ReactMapGL>
  )
}

export default Map

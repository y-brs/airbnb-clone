import { useState } from 'react'
import Image from "next/image"
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
import { StarIcon } from "@heroicons/react/solid"
import { HeartIcon } from "@heroicons/react/outline"

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})
  const [isActive, setIsActive] = useState({
    activeObject: null,
    object: [
      { id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }
    ]
  })

  function handleClick(index) {
    setIsActive({ ...isActive, activeObject: isActive.object[index]});
  };

  function handleClickStyle(index) {
    if (isActive.object[index] === isActive.activeObject) {
      return "drop-shadow-sm bg-black text-white border-black scale-105"
    } else {
      return "hover:drop-shadow-sm bg-white text-black border-gray-300 hover:bg-gray-100 hover:scale-105 active:bg-black active:text-white"
    }
  };

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11
  })


  return (
    <ReactMapGL
      mapStyle="mapbox://styles/yarmulnik/ckt0bxje8atsk17qhjmq9oney"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >

      {searchResults.map((result, index) => (
        <div key={index} onClick={() => {handleClick(index), setSelectedLocation(result)}} >
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-10}
            offsetTop={0}
            className="active:z-20 hover:z-20 z-10"
          >
            <p className={`cursor-pointer rounded-full w-auto py-1 px-2 text-sm font-semibold border ${handleClickStyle(index)}`}>
              {result.price}
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              className="rounded-2xl p-0 z-50"
              offsetTop={0}
              offsetLeft={15}
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              closeButton={false}
              latitude={result.lat}
              longitude={result.long}
            >
              <div className="m-0 max-w-[250px] relative z-10 rounded-xl cursor-pointer">
                <div className="relative w-auto h-[150px] mb-2">
                  <div className="p-2 z-20 absolute top-1 right-1 cursor-pointer rounded-full transition transform duration-200">
                    <HeartIcon className="h-6 text-white active:scale-95" fill="rgba(0, 0, 0, 0.1)" />
                  </div>
                  <Image
                    className="rounded-t-xl"
                    src={result.img}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    alt={result.title}
                  />
                </div>
                <div className="px-4 py-1 pb-4 w-auto">
                  <p className="cursor-pointer flex items-center text-sm">
                    <StarIcon className="h-5 text-red-500" />
                    {result.star} <span className="ml-2 font-light text-gray-500">(42)</span>
                  </p>
                  <h4 className="text-md font-light truncate overflow-ellipsis">{result.location}</h4>
                  <h4 className="text-md font-light truncate overflow-ellipsis">{result.title}</h4>
                  <p className="text-md font-semibold">{result.price} <span className="font-normal">/ night</span></p>
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

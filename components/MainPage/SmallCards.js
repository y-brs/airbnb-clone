import Image from "next/image"

function SmallCards({ img, location, distance }) {
  return (
    <div className="flex items-center mt-5 mr-5 mb-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-50 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          className="rounded-lg"
          src={img}
          alt={location}
          layout="fill"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCards

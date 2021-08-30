import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex flex-col md:flex-row py-7 border-b cursor-pointer hover:opacity-80 transition duration-200 ease-out first:border-t">
      <div className="relative w-auto h-[250px] md:h-24 md:w-40 xl:h-36 xl:w-60 2xl:h-36 2xl:w-60 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pt-5 md:pl-5 md:pt-0 ">
        <div className="flex relative justify-between">
          <p className="text-sm text-gray-500">{location}</p>
          <div className="p-3 absolute -top-4 -right-4 cursor-pointer rounded-full transition transform duration-200 hover:bg-gray-100">
            <HeartIcon className="h-6" />
          </div>
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow font-light">{description}</p>

        <div className="flex justify-between items-end pt-2 text-sm">
          <p className="flex items-center font-semibold">
            <StarIcon className="h-5 text-red-500" />
            {star}
            <span className="ml-1 font-extralight">(42 reviews)</span>
          </p>

          <div>
            <p className="text-lg lg:text-xl font-semibold pb-1">{price}</p>
            <p className="font-extralight">{total}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InfoCard

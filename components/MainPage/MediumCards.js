import Image from "next/image"

function MediumCards({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          className="rounded-xl"
          src={img}
          alt={title}
          layout="fill"
        />
      </div>
      <div>
        <h3 className="font-semibold mt-2">{title}</h3>
      </div>
    </div>
  )
}

export default MediumCards

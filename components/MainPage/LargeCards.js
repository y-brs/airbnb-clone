import Image from "next/image";

function LargeCards({ img, title, description, buttonText }) {
  return (
    <section className="relative cursor-pointer my-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          title={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-12 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-white bg-gray-900 px-6 py-3 rounded-lg mt-10">{buttonText}</button>
      </div>
    </section>
  )
}

export default LargeCards

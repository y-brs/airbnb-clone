import Image from "next/image"

export default function Banner() {
  return (
    <div className="relative h-[900px] sm:h-[700px] lg:h-[580px] xl:h-[700px] 2xl:[700px]">
      <Image
        src="/images/banner-top.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-[35%] w-[500px] px-10 lg:px-20">
        <p className="text-[55px] font-semibold leading-none text-white">Olympian & Paralympian Online Experiences</p>
        <button className="text-black bg-white px-6 py-2 font-semibold text-sm rounded-lg mt-5">Explore now</button>
      </div>
    </div>
  )
}

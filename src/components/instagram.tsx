import Image from "next/image"

export default function InstagramFollow() {
  const instagramImages = [
    "/images/06.jpg",
    "/images/13.png",
    "/images/02.jpg",
    "/images/09.png",
    "/images/03.jpg",
    "/images/07.png",
  ]

  return (
    <section className="bg-white py-16 px-6 sm:px-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-4xl sm:text-3xl font-bold text-gray-800 mb-4">
          Follow Products And Discounts On Instagram
        </h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {instagramImages.map((src, index) => (
            <div key={index} className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Instagram Product ${index + 1}`}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


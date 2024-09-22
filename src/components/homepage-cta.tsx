import Image from "next/image"
import Link from "next/link"

export const SectionCTA = () => {
  const content = [
    {
      label: "SERVICE",
      title: "Experience Unmatched CNC Machining Excellence",
      description: "Our CNC machining services leverage cutting-edge technology to deliver exceptional precision and accuracy. Trust us to transform your ideas into reality with flawless results.",
      imgSrc: "https://images.unsplash.com/photo-1713371398485-7bde1bde9def?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jelifer-maniago-8MBTn3Z71zI-unsplash.jpg&w=640",
    },
    {
      label: "SERVICE",
      title: "Advanced CNC Machining for Superior Accuracy",
      description: "Our state-of-the-art CNC technology allows us to produce high-quality parts with exceptional accuracy, tailored to your industry’s unique specifications.",
      imgSrc: "https://images.unsplash.com/photo-1666875056195-0a0836ad4f26?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sven-daniel-vZ1IuT_E9Hg-unsplash.jpg&w=640",
    },
    {
      label: "SERVICE",
      title: "Tailored Custom Solutions for Every Need",
      description: "No matter the complexity, we provide custom-engineered solutions, whether it’s a single prototype or high-volume production, with precision and dedication.",
      imgSrc: "https://images.unsplash.com/photo-1713371398484-cc4e4f6a262a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jelifer-maniago-O5rSp_U-Pa0-unsplash.jpg&w=640",
    }
  ]
  return (
    <>
      <section className="flex flex-col gap-12 lg:gap-36 py-28">
        {content.map((o, i) => (
          <div key={i} className={`max-w-screen-xl mx-auto md:px-8`}>
            <div className={`items-center gap-12 sm:px-4 md:px-0 flex flex-col lg:flex-row ${i % 2 === 0 ? "" : " lg:flex-row-reverse"}`}>

              <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0">
                <h3 className="text-cyan-600 font-semibold">
                  {o.label}
                </h3>
                <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  {o.title}
                </p>
                <p className="mt-3 text-gray-600">
                  {o.description}
                </p>
                <Link href="/contact" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div className="lg:max-w-xl">
                <Image src={o.imgSrc} height={1080} width={1080} className="object-cover h-96 sm:rounded-lg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
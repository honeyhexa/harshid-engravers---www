import Image from "next/image";

export const Footer = () => {

  // const footerNavs = [
  //     {
  //         href: 'javascript:void()',
  //         name: 'Terms'
  //     },
  //     {
  //         href: 'javascript:void()',
  //         name: 'License'
  //     },
  //     {
  //         href: 'javascript:void()',
  //         name: 'Privacy'
  //     },
  //     {
  //         href: 'javascript:void()',
  //         name: 'About us'
  //     }
  // ]
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <Image src="/harshid-logo.webp"
              width={120}
              height={50}
              className="h-12 object-contain" alt="" />
            <p className="max-w-md">
              We do job work, better than expectations, since 1975.
            </p>
            {/* <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                            {
                                footerNavs.map((item, idx) => (
                                    <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
                                        <a key={idx} href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul> */}
          </div>

        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>© 2024 Harshid Engravers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
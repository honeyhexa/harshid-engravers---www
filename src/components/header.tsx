import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="z-50 bg-white/70 backdrop-blur-xl border-b border-b-slate-200 sticky top-0">


        <nav className="relative items-center py-3 px-4 mx-auto max-w-screen-xl sm:px-8 flex md:space-x-6">
          <div className="flex flex-1 justify-between">
            <Link href="/">
              <Image
                src="/harshid-logo.webp"
                width={120}
                height={50}
                className="h-12 object-contain"
                alt="Harshid Logo"
              />
            </Link>
            {/* <button className="text-gray-500 outline-none md:hidden"
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (

                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )
              }
            </button> */}
          </div>

              <Link href="/contact" className="flex items-center justify-center gap-x-2 py-2 px-4 text-center text-white text-base font-bold bg-cyan-700 duration-150 hover:bg-cyan-700 active:bg-cyan-900 rounded-lg shadow-xl hover:shadow-none">
                Contact
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path d="m4.922 6.752-1.067.534a7.52 7.52 0 0 0 4.859 4.86l.534-1.068a1 1 0 0 1 1.046-.542l2.858.44a1 1 0 0 1 .848.988V13a1 1 0 0 1-1 1h-2c-.709 0-1.4-.082-2.062-.238a9.012 9.012 0 0 1-6.7-6.7A9.024 9.024 0 0 1 2 5V3a1 1 0 0 1 1-1h1.036a1 1 0 0 1 .988.848l.44 2.858a1 1 0 0 1-.542 1.046Z" />
                  <path d="M9.22 5.72a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L9.22 5.72Z" />
                </svg>
              </Link>

        </nav>
      </header>
  )
}

export default Header
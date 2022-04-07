import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex">
          <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 lg:w-2/5">
            <div className="px-4 sm:px-6 lg:px-8">
              <Link className="flex items-center gap-1" to="/">
                <StaticImage
                  src="../img/totalcontrol-logo.png"
                  alt="Logo"
                  className="w-40 h-12 sm:w-40 sm:h-12"
                  layout="fullWidth"
                  loading="eager"
                  backgroundColor="transparent"
                  placeholder="blurred"
                />
              </Link>

              <p className="max-w-md mt-2 text-gray-600 dark:text-gray-400">
                No. 11-23, Avenue Crest,<br/>
                Jalan Jubli Perak 22/1,<br/>
                Seksyen 22,<br/>
                40300 Shah Alam, Selangor.
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About
                </h3>
                <Link
                  to="/about"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Company
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Projects
                </h3>
                <Link
                  to="/projects"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Project list
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
                <a
                  href="/products#Power-Cables"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Cables
                </a>
                <a
                  href="/products#Accessories"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Accessories
                </a>
                <a
                  href="/products#Fibers-&amp;-Accessories"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Fibers &amp; Accessories
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Phone: +603-5037-7886
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Fax: +603-5037-7889
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">
            © Total Control Sdn. Bhd. {(new Date().getFullYear())} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

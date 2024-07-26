/** @format */

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "../utils/constantes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    initial: {
      scaleY: 0,
      originY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  const mobileLinksVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  }

  return (
    <>
      <header className="border-none backdrop-blur lg:backdrop-filter sm:backdrop-blur sm:fixed sm:w-full sm:z-50 sm:border-b-2 sm:border-b-slate-300 sm:border-b-solid lg:border-b-2 lg:border-b-slate-300 lg:border-b-solid xl:border-b-2 xl:border-b-slate-300 xl:border-b-solid glass">
        <AnimatePresence>
          <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 origin-top">
            <div className="flex items-center justify-between p-4 font-semibold text-sm">
              <h1 className="font-roboto-slab text-xl sm:text-2xl font-bold text-gray-900">
                agata.
              </h1>

              {/* Desktop Navigation */}
              <nav className="font-rubic hidden md:flex items-center space-x-4 border-2 border-black pr-[0.6rem] pl-6 py-2 rounded-full gap-6">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-900 hover:text-gray-500 transition-all delay-75 ease-linear hover:drop-shadow-lg"
                  >
                    {item.item}
                  </a>
                ))}
                <motion.button
                  className="buttonOne"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Apply Loan
                </motion.button>
              </nav>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden md:backdrop-blur sm:backdrop-blur h-screen backdrop-blur text-4xl"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-between items-center h-3/4 text-4xl">
                {navItems.map((item, index) => (
                  <div className="overflow-hidden font-bold" key={index}>
                    <motion.a
                      variants={mobileLinksVars}
                      initial="initial"
                      animate="open"
                      key={index}
                      href={item.href}
                      className="font-rubic text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-2xl font-medium"
                    >
                      {item.item}
                    </motion.a>
                  </div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`text-left font-bold text-gray-900 block text-base buttonOne active:bg-black active:text-white`}
                >
                  Apply Loan
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
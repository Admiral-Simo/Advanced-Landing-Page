import { useState } from "react";

function Navbar() {
  const [shown, setShown] = useState(false);
  const toggleShown = () => {
    setShown((prev) => !prev);
  };
  return (
    <nav className="p-4 bg-amber-400 z-40">
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#"
          className="focus-state lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50"
          aria-label="Go to homepage"
        >
          <img
            src="/assets/logo.svg"
            width={200}
            className="w-48 md:w-64 lg:w-72"
            alt="Home Smart Logo"
          />
        </a>
        <button
          onClick={toggleShown}
          id="menu"
          className="lg:hidden text-neutral-900 hover:text-neutral-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          role="menubar"
          className={`${
            shown ? "flex" : "hidden"
          } justify-between w-full lg:flex lg:static lg:shadow-none  lg:flex-row flex-col items-center gap-4 absolute right-0 left-0 top-16 bg-amber-400 shadow-xl text-center p-6 text-lg`}
        >
          <a href="/" role="menuitem" className="menu-item focus-state">
            Home
          </a>
          <a
            href="/"
            role="menuitem"
            className="menu-item focus-state lg:mr-auto"
          >
            Contact
          </a>
          <a href="/" role="menuitem" className="menu-item focus-state">
            Log In
          </a>
          <a
            href="/"
            role="menuitem"
            className="button py-2 bg-teal-900 text-white rounded-md shadow-xl hover:shadow-none focus-state"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

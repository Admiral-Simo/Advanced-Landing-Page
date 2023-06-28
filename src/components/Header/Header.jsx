import React from "react";

function Header() {
  return (
    <header className="relative pt-16 md:pt-24 lg:pt-48">
      <div className="absolute inset-0 bottom-8 md:bottom-24 xl:bottom-32 bg-gradient-to-b from-amber-400 to-amber-600"></div>
      <div className="container mx-auto grid grid-rows-1 place-items-end px-2">
        <img src="/assets/couch.png" className="row-start-1 z-20 row-end-2 col-start-1 col-end-2 mx-auto" alt="Couch" />
        <img src="/assets/app.svg" className="row-start-1 z-20 row-end-2 col-start-1 col-end-2 mx-auto w-40 sm:w-52 md:w-64 lg:w-72" alt="App" />
      </div>
    </header>
  );
}

export default Header;

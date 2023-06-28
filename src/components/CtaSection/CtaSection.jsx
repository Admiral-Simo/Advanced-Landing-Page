import React from "react";
import Button from "../Reusable/Button";

function CtaSection() {
  return (
    <div className="relative">
      <div className="flex flex-wrap-reverse gap-8 justify-center">
        <div className="flex flex-wrap flex-col items-start lg:justify-center gap-6">
          <div className="flex flex-wrap flex-col items-start gap-2">
            <h2 className="text-4xl font-bold">Relax, you're home!</h2>
            <p className="max-w-md">
              All our supported hardware includes traditional inputs so you can
              integrate our products into your house in a way that's best for
              everyone.
            </p>
          </div>
          <Button text="Download the App" className='my-0 mx-0' />
        </div>
        <img src="/assets/table.png" alt="Table" className="z-20" />
      </div>
      <div className="rounded-full absolute -bottom-6 -right-32 aspect-square md:w-64 lg:w-96 xl:max-w-lg border-amber-400 md:border-8 border-amber 400" />
      <div className="h-24 bg-teal-900 z-10 mt-12 xl:h-48 xl:absolute xl:w-full xl:mt-0 xl:-bottom-8" />
    </div>
  );
}

export default CtaSection;

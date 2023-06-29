import React from "react";
import Button from "../Reusable/Button";

function ContactUs() {
  return (
    <section className="container mx-auto px-8 overflow-hidden">
      <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
        <div className="md:flex-1 md:max-w-sm relative">
          <img src="/assets/lamp.png" alt="Lamp" className="mx-auto" />
          <Button
            text="Download the App"
            className="w-max md:mb-12"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            }
          />
          <img
            src="/assets/app.svg"
            alt="app"
            width="240"
            className="hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-16 xl:max-w-xs"
          />
        </div>
        <form className="relative border-8 rounded-lg border-neutral-900 p-6 grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-white dark:bg-neutral-800 w-full">
          <h2 id="contact" className="text-3xl font-bold h-fit">
            Let's Connect
          </h2>
          <div className="relative h-fit">
            <input
              type="text"
              id="name"
              placeholder="YOUR NAME"
              className="w-full peer pl-2 border-4 border-amber-400 rounded-md placeholder-transparent focus:ring-4 focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:text-neutral-900 dark:bg-amber-400"
            />
            <label
              htmlFor="name"
              className="absolute transition-all text-neutral-500 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 peer-focus:-top-4 peer-focus:left-2 text-sm font-bold uppercase -top-4 left-2 peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 -translate-y-1/2"
            >
              your name
            </label>
          </div>
          <div className="relative h-fit">
            <input
              type="text"
              id="email"
              placeholder="YOUR EMAIL"
              className="w-full peer pl-2 border-4 border-amber-400 rounded-md placeholder-transparent focus:ring-4 focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:text-neutral-900 dark:bg-amber-400"
            />
            <label
              htmlFor="email"
              className="absolute transition-all text-neutral-500 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 peer-focus:-top-4 peer-focus:left-2 text-sm font-bold uppercase -top-4 left-2 peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 -translate-y-1/2"
            >
              your email
            </label>
          </div>
          <div className="relative h-fit">
            <textarea
              className="w-full peer pl-2 border-4 border-amber-400 rounded-md placeholder-transparent focus:ring-4 focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:text-neutral-900 dark:bg-amber-400"
              name="content"
              id="content"
              cols="20"
              rows="5"
              placeholder="How can we help?"
            ></textarea>
            <label
              htmlFor="content"
              className="absolute transition-all text-neutral-500 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 peer-focus:-top-4 peer-focus:left-2 text-sm font-bold uppercase -top-4 left-2 peer-placeholder-shown:left-3 peer-placeholder-shown:top-4 -translate-y-1/2"
            >
              How can we help?
            </label>
          </div>
          <button className="rounded-md bg-black text-white font-bold tracking-widest w-fit py-1.5 px-7 focus:outline-none focus:ring-4 focus:ring-amber-400">Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;

import React from "react";

const Writter = () => {
  return (
    <section className="dark:bg-slate-800 dark:text-gray-50 py-32">
      <div className="container flex flex-col items-center justify-center space-y-8">
        <h1 className="text-4xl font-bold leading-none text-center text-pink-600 sm:text-5xl">
          Our Monitor Officer
        </h1>
        <p className="max-w-2xl text-center dark:text-gray-400">
          At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
          quam natus quis nihil quod, hic explicabo doloribus magnam neque,
          exercitationem eius sunt!
        </p>
        <div className="grid grid-cols-6 gap-10 pt-10">
          <div className="flex flex-col justify-center text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?0"
            />
            <p className="text-xl font-semibold leading-tight">
              Emily Rodriguez
            </p>
            <p className="dark:text-gray-400">Monitoring Officer</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?1"
            />
            <p className="text-xl font-semibold leading-tight">
              James Thompson
            </p>
            <p className="dark:text-gray-400">Monitoring Officer</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?2"
            />
            <p className="text-xl font-semibold leading-tight">Sophia Lee</p>
            <p className="dark:text-gray-400">Monitoring Officer</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?3"
            />
            <p className="text-xl font-semibold leading-tight">Daniel Smith</p>
            <p className="dark:text-gray-400">Monitoring Officer</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?4"
            />
            <p className="text-xl font-semibold leading-tight">Olivia Davis</p>
            <p className="dark:text-gray-400">Monitoring Officer</p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?5"
            />
            <p className="text-xl font-semibold leading-tight">Ethan Miller</p>
            <p className="dark:text-gray-400">Monitoring Officer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writter;

import React from 'react'

function HeroBanner() {
  return (
    <section className="relative  bg-cover bg-center bg-no-repeat">
      <div className="h-600px flex items-center  bg-cover bg-center bg-no-repeat">
        <div className="container  h-screen text-black mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
          <div className="pt-40 md:w-1/2">
            <h1 className="text-6xl md:text-6xl font-bold mb-4">
              Welcome to My Website
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra nibh eget finibus convallis. Fusce at elementum libero,
              vitae hendrerit mi.
            </p>
            <div className="flex space-x-4">
              <button className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Donate
              </button>
              <button className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner
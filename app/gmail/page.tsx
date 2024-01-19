
import Image from "next/image";

export default async function gmail() {
  return (

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Gmail
          </h1>
        </div>

        <div className="grid gap-y-8 sm:gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-10 pt-8">
          <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-xl">
            <h1 className="text-center text-3xl p-4 font-serif">
              alra12060@gmail.com
            </h1>
          </div>
          <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-xl">
            <h1 className="text-center text-3xl p-4 font-serif ">
              asra12060@gmail.com
            </h1>
          </div>
        </div>
      </div>
     
  );
}

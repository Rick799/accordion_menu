/* eslint react/prop-types: 0 */

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  // State to control whether the answer is shown or hidden
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="py-4 px-6 mb-4 border text-white border-slate-400 rounded-md shadow-md shadow-slate-400 hover:shadow-slate-800 dark:shadow-slate-900 dark:hover:shadow-slate-500 bg-slate-800 dark:bg-yellow-500 dark:text-black">
      <header className="flex justify-between items-center">
        <h4 className="text-base md:text-lg leading-6 tracking-wider font-mono font-semibold mr-3">
          {title}
        </h4>
        <button
          className="w-7 h-7 md:w-8 md:h-8 rounded-full p-2 bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-yellow-500 cursor-pointer flex justify-center items-center "
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className="my-3 mr-10">{info}</p>}
    </article>
  );
};

export default Question;

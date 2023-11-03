
import { useEffect, useState } from "react";
import data from "./data.js";
import SingleQuestion from "./question.jsx";

function Accordion() {
  // State to manage the list of questions
  const [questions, setQuestions] = useState(data);

  // State for managing the theme (light or dark)
  const [theme, setTheme] = useState(null);

  // Effect to apply the selected theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Function to toggle between light and dark themes
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="overflow-x-scroll min-h-screen bg-zinc-200 dark:bg-space dark:bg-cover">
      <div className="flex justify-end m-2">
        <button onClick={handleThemeSwitch}>
          <img
            className="w-8"
            src="https://ps.w.org/wp-dark-mode/assets/icon-256x256.gif?rev=2872214"
            alt="dark mode icon"
          />
        </button>
      </div>
      <div className="w-10/12 max-w-4xl my-36 mx-auto rounded-md py-10 px-8 grid gap-y-5 gap-x-8 lg:flex lg:items-center bg-white border border-slate-800 dark:border-yellow-500  dark:bg-gradient-to-r from-slate-900 to-black shadow-xl shadow-black">
        <h3 className="text-center text-xl md:text-3xl font-semibold leading-10 tracking-wide italic dark:text-white font-mono">
          James Webb Space Telescope FAQs
        </h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Accordion;

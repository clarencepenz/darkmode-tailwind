import Toggle from "./components/toggle";

function App() {
  return (
    <div className="flex items-center justify-center h-screen transition-all bg-primary-light dark:bg-primary-dark">
      <Toggle />
      <figure className="w-64 p-8 mx-4 shadow-xl bg-primary-dark rounded-xl md:p-0 dark:bg-primary-light h-96">
        <img
          className="mx-auto "
          src="https://miro.medium.com/max/980/1*3iesg_sr8kC6NYN2iiFHRQ.png"
          alt="dark"
        />
        <div className="pt-4 space-y-4 text-center md:px-8 md:text-left">
          <blockquote>
            <p className="text-lg font-medium text-primary-light dark:text-primary-dark">
              “Theme day”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-outline-light dark:text-outline-dark">
              Sarah Dayan
            </div>
            <div className="text-secondary-light dark:text-secondary-dark">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default App;
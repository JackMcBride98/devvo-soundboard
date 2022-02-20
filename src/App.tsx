import "./App.css";
import devvoImgUrl from "./images/mc-devvo.jpeg";

function App() {
  return (
    <div className="App flex flex-col mx-auto max-w-xl">
      {/* <h1 className="text-2xl font-semi-bold p-4">MC Devvo Soundboard</h1> */}
      <img src={devvoImgUrl} alt={"mc devvo"} />
    </div>
  );
}

export default App;

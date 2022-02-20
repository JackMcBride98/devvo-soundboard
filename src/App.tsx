import "./App.css";
import devvoImgUrl from "./images/mc-devvo.jpeg";

type SoundButtonProps = {
  url: string;
  name: string;
};

const SoundButton = ({ url, name }: SoundButtonProps) => {
  const audio = new Audio(url);

  return (
    <div>
      <button
        className="p-2 m-2 border rounded-lg"
        onClick={() => audio.play()}
      >
        {name}
      </button>
    </div>
  );
};

function App() {
  // const audio = new Audio(path);
  const sounds = [
    { src: require("./audio/wire.mp3"), name: "wire" },
    {
      src: require("./audio/why-dint-ya-stop-him.mp3"),
      name: "why dint ya stop him",
    },
    {
      src: require("./audio/woah-mate.mp3"),
      name: "woah mate",
    },
    {
      src: require("./audio/you-still-here.mp3"),
      name: "you still ere",
    },

    // {
    //   src: require("./audio/"),
    //   name: "",
    // },
  ];
  return (
    <div className="App flex flex-col mx-auto max-w-xl">
      {/* <h1 className="text-2xl font-semi-bold p-4">MC Devvo Soundboard</h1> */}
      <img src={devvoImgUrl} alt="MC Devvo" />
      {/* <div>
        <button onClick={() => audio.play()}>This is Sound Button</button>
      </div> */}
      <div className="grid grid-cols-2">
        {sounds.map((sound) => (
          <SoundButton url={sound.src} name={sound.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

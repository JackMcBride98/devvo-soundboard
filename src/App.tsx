import "./App.css";
import devvoImgUrl from "./images/mc-devvo.jpeg";

type SoundButtonProps = {
  src: string;
  name: string;
};

const SoundButton = ({ src, name }: SoundButtonProps) => {
  const audio = new Audio(src);

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

function shuffleArray(array: SoundButtonProps[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

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
    {
      src: require("./audio/boss-of-jobs.mp3"),
      name: "boss of jobs",
    },
    {
      src: require("./audio/break1.mp3"),
      name: "break 1",
    },
    {
      src: require("./audio/break2.mp3"),
      name: "break 2",
    },
    {
      src: require("./audio/break3.mp3"),
      name: "break 3",
    },
    {
      src: require("./audio/dole-day.mp3"),
      name: "dole day",
    },
    {
      src: require("./audio/fight.mp3"),
      name: "fight",
    },
    {
      src: require("./audio/watch-what-your-doing.mp3"),
      name: "watch what your doing",
    },
    {
      src: require("./audio/studio-down.mp3"),
      name: "pulling studio down",
    },
    {
      src: require("./audio/stupid-knobhead.mp3"),
      name: "stupid knobhead",
    },
    {
      src: require("./audio/i-know.mp3"),
      name: "i know",
    },
    {
      src: require("./audio/how-you-doing-buddy.mp3"),
      name: "how you doing buddy",
    },
    {
      src: require("./audio/fuck-loads-o-birds.mp3"),
      name: "fuck loads o birds",
    },
    {
      src: require("./audio/fookin-showed-you.mp3"),
      name: "fookin showed you",
    },
    {
      src: require("./audio/fookin-knobhead.mp3"),
      name: "fookin knobhead",
    },
    {
      src: require("./audio/its-dead-anyway.mp3"),
      name: "its dead anyway",
    },
    {
      src: require("./audio/its-devvo-time.mp3"),
      name: "Devvo time",
    },
    {
      src: require("./audio/its-good-mate.mp3"),
      name: "good mate",
    },
    {
      src: require("./audio/job.mp3"),
      name: "look for a job and that",
    },
    {
      src: require("./audio/kick-owt.mp3"),
      name: "i dint kick owt",
    },
    {
      src: require("./audio/knobhead.mp3"),
      name: "knobhead",
    },
    {
      src: require("./audio/lookin-at.mp3"),
      name: "fook you lookin at",
    },
    {
      src: require("./audio/lyrical-madness.mp3"),
      name: "lyrical madness",
    },
    {
      src: require("./audio/my-pad.mp3"),
      name: "my pad",
    },
    {
      src: require("./audio/not-a-good-day.mp3"),
      name: "not a good day",
    },
    {
      src: require("./audio/not-too-fast.mp3"),
      name: "not too fast",
    },
    {
      src: require("./audio/right-hook.mp3"),
      name: "right mind, right hook",
    },
    {
      src: require("./audio/scotland-note.mp3"),
      name: "scottish pound note",
    },
    {
      src: require("./audio/shit-london-bars.mp3"),
      name: "shit london rapper",
    },
    {
      src: require("./audio/stood-on-that.mp3"),
      name: "stood on that",
    },
    {
      src: require("./audio/stop-him.mp3"),
      name: "stop him",
    },
    {
      src: require("./audio/studio.mp3"),
      name: "Devvo's studio",
    },
    {
      src: require("./audio/think-its-dead.mp3"),
      name: "d'you fink its dead",
    },
    {
      src: require("./audio/uncle-devvo.mp3"),
      name: "uncle devvo",
    },
    {
      src: require("./audio/fookin-area.mp3"),
      name: "bezzin and pies",
    },
  ];
  shuffleArray(sounds);
  return (
    <div className="App flex flex-col mx-auto max-w-xl">
      {/* <h1 className="text-2xl font-semi-bold p-4">MC Devvo Soundboard</h1> */}
      <img src={devvoImgUrl} alt="MC Devvo" />
      {/* <div>
        <button onClick={() => audio.play()}>This is Sound Button</button>
      </div> */}
      <div className="grid grid-cols-2">
        {sounds.map((sound) => (
          <SoundButton src={sound.src} name={sound.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import devvoImgUrl from "./images/mc-devvo.jpeg";
import { useState, useEffect } from "react";
import { saveAs } from "file-saver";

type SoundButtonProps = {
  src: string;
  name: string;
  download?: boolean;
};

const SoundButton = ({ src, name, download }: SoundButtonProps) => {
  const audio = new Audio(src);
  const [clicked, setClicked] = useState(false)
  audio.onended = () => setTimeout(() => setClicked(false), 500 )
  console.log(audio.onended)
  return (
    <div className='relative rounded-lg'>

      <button
        className={"group peer z-50 relative font-semibold group  bg-gradient-to-b even:from-[#CC9682] odd:to-[#CC9682] even:to-[#877D66] odd:from-[#877D66] p-2 border rounded-lg  border-[#A53E42] w-full h-full flex justify-center " + (clicked ? 'shadow-in': 'shadow-out')}
        onMouseDown={() => audio.play()}
        onClick={() => {
          setClicked(true)
        }}
      >

        <p className={"group-active:animate-bounce " + (clicked && 'animate-bounce')}>{name}</p>

      </button>
      {download && (
          <button
            onClick={() => saveAs(src, name)}
            className="ml-2 bg-white mt-2  rounded-lg p-2  focus:bg-slate-100 focus:shadow-2xl"
          >
            <img
              src={require("./images/download.png")}
              alt={"download"}
              className="w-4 h-4"
            ></img>
          </button>
        )}
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
  const [sounds, setSounds] = useState([{ src: "", name: "" }]);

  useEffect(() => {
    const theSounds = [
      {
        src: process.env.PUBLIC_URL + "/audio/wire.mp3",
        name: "wire",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/why-dint-ya-stop-him.mp3",
        name: "why dint ya stop him",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/woah-mate.mp3",
        name: "woah mate",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/you-still-here.mp3",
        name: "you still ere",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/boss-of-jobs.mp3",
        name: "boss of jobs",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/break1.mp3",
        name: "break 1",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/break2.mp3",
        name: "break 2",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/break3.mp3",
        name: "break 3",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/dole-day.mp3",
        name: "dole day",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/fight.mp3",
        name: "fight",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/watch-what-your-doing.mp3",
        name: "watch what your doing",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/studio-down.mp3",
        name: "pulling studio down",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/stupid-knobhead.mp3",
        name: "stupid knobhead",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/i-know.mp3",
        name: "i know",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/how-you-doing-buddy.mp3",
        name: "how you doing buddy",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/fuck-loads-o-birds.mp3",
        name: "fuck loads o birds",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/fookin-showed-you.mp3",
        name: "fookin showed you",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/fookin-knobhead.mp3",
        name: "fookin knobhead",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/its-dead-anyway.mp3",
        name: "its dead anyway",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/its-devvo-time.mp3",
        name: "Devvo time",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/its-good-mate.mp3",
        name: "good mate",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/job.mp3",
        name: "look for a job and that",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/kick-owt.mp3",
        name: "i dint kick owt",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/knobhead.mp3",
        name: "knobhead",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/lookin-at.mp3",
        name: "fook you lookin at",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/lyrical-madness.mp3",
        name: "lyrical madness",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/my-pad.mp3",
        name: "my pad",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/not-a-good-day.mp3",
        name: "not a good day",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/not-too-fast.mp3",
        name: "not too fast",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/right-hook.mp3",
        name: "right mind, right hook",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/scotland-note.mp3",
        name: "scottish pound note",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/shit-london-bars.mp3",
        name: "shit london rapper",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/stood-on-that.mp3",
        name: "stood on that",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/stop-him.mp3",
        name: "stop him",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/studio.mp3",
        name: "Devvo's studio",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/think-its-dead.mp3",
        name: "d'you fink its dead",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/uncle-devvo.mp3",
        name: "uncle devvo",
      },
      {
        src: process.env.PUBLIC_URL + "/audio/fookin-area.mp3",
        name: "bezzin and pies",
      },
    ];
    shuffleArray(theSounds);
    setSounds(theSounds);
  }, []);

  const [download, setDownload] = useState(false);
  return (
    <div className="App flex flex-col mx-auto max-w-2xl text-[#231F20] static">
      {/* <h1 className="text-2xl font-semi-bold p-4">MC Devvo Soundboard</h1> */}
      <div className="staticborder-t-0 border-4 border-[#231f20]">
        <img src={devvoImgUrl} alt="MC Devvo" className="" />
      </div>
      <h1 className="absolute inset-x-0 top-[16%] text-2xl lg:text-5xl opacity-90 text-white">
        MC Devvo Soundboard
      </h1>

      {/* <div>
        <button onClick={() => audio.play()}>This is Sound Button</button>
      </div> */}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-9 px-6 py-6 items-center border-[#877D66] border-2 border-t-0 -mt-1 rounded-b-lg w-full">
        <h1 className="text-xl font-semibold col-span-2 lg:col-span-3 border border-[#91908E] bg-[#CC9682] rounded-lg w-max justify-self-center p-2">
          <button onClick={() => setDownload(!download)}>
            Turn {!download ? "on" : "off"} download
          </button>
        </h1>
        {sounds.map((sound) => (
          <SoundButton
            src={sound.src}
            name={sound.name}
            key={sound.name}
            download={download}
          />
        ))}
      </div>
      <h1 className="text-3xl font-semibold mt-4">Original Video</h1>
      <a href='https://www.youtube.com/watch?v=5I9EoGOKbyg' className="mt-2 text-blue-400 underline" rel="noreferrer" target="_blank" >Link</a>
      <div className="flex justify-center py-8">
        <iframe
          width="560"
          height="315"
          src="https://yewtu.be/embed/5I9EoGOKbyg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;

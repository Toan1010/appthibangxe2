import { Fragment, useState } from "react";

import Header from "./components/Header";
import Ontest from "./components/Ontest";

import { getRandomQuests } from "./GetAndShuffle";
import Result from "./components/Result";

function App() {
  const [mode, setMode] = useState(0);
  const [status, setStatus] = useState("Start");
  const [start, setStart] = useState(false);
  const [listQuestions, setListQuestions] = useState([]);

  console.log("App");

  const changeState = (mode, submit = true) => {
    if (
      !submit &&
      status === "End" &&
      !window.confirm("Are you sure you want to submit ?")
    ) {
      console.log(status);
      return; // Do nothing if the user clicks Cancel in the confirm dialog
    }
    setMode(mode);
    setStart((prev) => !prev);
    setStatus((prev) => {
      if (prev === "Start") {
        return "End";
      }
      let check = prev === "Again" ? "End" : "Again";
      return check;
    });
    if (!start) {
      setListQuestions(getRandomQuests(20));
    }
  };

  return (
    <Fragment>
      <Header start={changeState} change={status}></Header>
      {start && (
        <Ontest
          mode={mode}
          listQuests={listQuestions}
          onEnd={changeState}
        ></Ontest>
      )}
      {!start && <Result listQuestions={listQuestions}></Result>}
    </Fragment>
  );
}

export default App;

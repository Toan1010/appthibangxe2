import { useState } from "react";
import { getRandomQuests } from "./GetAndShuffle";
import "./App.css";

import Header from "./component/Header";
import Question from "./component/Question";

function App() {
  const [quiz, setQuiz] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [start, setStart] = useState(false);
  const [listQuestions, setListQuestions] = useState([]);
  const [status, setStatus] = useState("Start");

  const toggleQuiz = (mode) => {
    // if (
    //   status === "End" &&
    //   !window.confirm("Are you sure you want to submit ?")
    // ) {
    //   return; // Do nothing if the user clicks Cancel in the confirm dialog
    // }

    setStart((prev) => !prev);
    setQuiz(mode);
    setStatus((prev) => {
      if (prev === "Start") {
        return "End";
      }
      let check = prev === "Again" ? "End" : "Again";
      return check;
    });
    console.log(quiz);
    if (!start) {
      setListQuestions(getRandomQuests(mode));
    }
  };

  return (
    <div className="App">
      <Header start={toggleQuiz} change={status}></Header>
      <div className="content">
        {start && <Question listQuestions={listQuestions} questIndex={1}></Question>}
      </div>
    </div>
  );
}

export default App;

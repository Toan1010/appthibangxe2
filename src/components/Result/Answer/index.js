import {  Fragment } from "react";

import styles from "./Answer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Answer({ listQuestions }) {
  const result = JSON.parse(localStorage.getItem("answer"));

  const setState = (data, select, correct) => {
    if (data === correct) {
      return cx("true");
    }
    if (data === select) {
      return cx("wrong");
    }
    return "";
  };

  return (
    <div className={cx("right")}>
      <div className={cx("list")}>
        {listQuestions.map((item, indexQues) => {
          return (
            <div
              key={indexQues}
              id={`quest${indexQues + 1}`}
              className={cx("questItem")}
            >
              <h1>
                {indexQues + 1}---{item.question}
              </h1>
              {result[item.question] === item.correctAnswer ? (
                <span className={cx("true")}>Correct</span>
              ) : (
                <span className={cx("wrong")}>Wrong</span>
              )}

              <br />
              {item.answers.map((answer, indexAn) => {
                return (
                  <Fragment key={`answer_${indexQues}_${indexAn}`}>
                    <label
                      className={setState(
                        answer,
                        result[item.question],
                        item.correctAnswer
                      )}
                    >
                      {answer}
                    </label>
                    <br></br>
                  </Fragment>
                );
              })}
            </div>
          );
        })}
        <br></br>
      </div>
    </div>
  );
}

export default Answer;

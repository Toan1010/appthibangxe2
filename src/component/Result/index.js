import styles from "./Result.module.scss";
import classNames from "classnames/bind";
import { Fragment, useEffect } from "react";

const cx = classNames.bind(styles);

function Result({ listQuests, score }) {
  const result = JSON.parse(localStorage.getItem("answer"));

  useEffect(() => {
    let point = 0;
    for (let i = 0; i < listQuests.length; i++) {
      if (result[listQuests[i].question] === listQuests[i].correctAnswer) {
        point = point + 1;
      }
    }
    score(point);
  }, [listQuests, score, result]);

  const setState = (data, select, correct) => {
    if (data === correct) {
      return cx("correct");
    }
    if (data === select) {
      return cx("wrong");
    }
    return "";
  };

  return (
    <div className={cx("list")}>
      {listQuests.map((item, indexQues) => {
        return (
          <div key={indexQues} className={cx("questItem")}>
            <h1>
              {indexQues + 1}---{item.question}
            </h1>
            {result[item.question] === item.correctAnswer ? (
              <span className={cx("correct")}>Correct</span>
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
  );
}

export default Result;

import { useEffect, useState } from "react";
import styles from "./Point.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Point({ listQuestions }) {
  const [score, setScore] = useState(0);
  const result = JSON.parse(localStorage.getItem("answer"));

  useEffect(() => {
    let point = 0;
    for (let i = 0; i < listQuestions.length; i++) {
      if (
        result[listQuestions[i].question] === listQuestions[i].correctAnswer
      ) {
        point = point + 1;
      }
      setScore(point);
    }
  }, [listQuestions, result]);

  const setState = (item) => {
    return item.correctAnswer === result[item.question]
      ? cx("true")
      : cx("wrong");
  };

  return (
    <div className={cx("left")}>
      <h1>Point : {score} / 20</h1>

      <div className={cx("navigate")}>
        {listQuestions.map((item, index) => {
          return (
            <a href={`#quest${index + 1}`} className={setState(item)}>
              {index + 1}
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default Point;

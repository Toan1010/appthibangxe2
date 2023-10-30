import styles from "./Question.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Question({ quest, now, prev, next, optionChange, answers }) {
  console.log('Question');
  return (
    <div className={cx("right")}>
      <div className={cx("question")}>
        {now + 1} ----- {quest.question}
      </div>
      {quest.answers.map((answer, indexAn) => {
        return (
          <div className={cx("answer")} key={`answer_${now}_${indexAn}`}>
            <input
              type="radio"
              id={`answer_${now}_${indexAn}`}
              name={quest.question}
              value={answer}
              checked={answer === answers[quest.question]}
              onChange={(e) => optionChange(e, quest.question)}
            />
            <label htmlFor={`answer_${now}_${indexAn}`}>{answer}</label>
          </div>
        );
      })}
      {now !== 0 && <div className={cx("arrow-left")} onClick={prev}></div>}
      {now !== 19 && <div className={cx("arrow-right")} onClick={next}></div>}
    </div>
  );
}

export default Question;

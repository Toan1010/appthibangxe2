import { Fragment, useState } from "react";
import styles from "./Question.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Question({ listQuestions, questIndex }) {
  console.log(listQuestions[questIndex]);
  return (
    <div className={cx("container-question")}>
      <Fragment>
        <h1>
          {questIndex} --- {listQuestions[questIndex].question}
        </h1>
      </Fragment>
    </div>
  );
}

export default Question;

import React, { useState, useEffect } from "react";
import style from "./Time.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Time({ initialTime, onTimeup, moveTo }) {
  const [timeLeft, setTimeLeft] = useState(!initialTime || initialTime * 60);
  useEffect(() => {
    let interval;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      onTimeup(initialTime);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, onTimeup, initialTime]);

  // Format the time to "00:00"
  const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(
    2,
    "0"
  )}:${String(timeLeft % 60).padStart(2, "0")}`;

  const buttonElements = [];
  for (let i = 1; i <= 20; i++) {
    buttonElements.push(
      <button key={`#quest${i}`} href={`#quest${i}`} onClick={() => moveTo(i)}>
        {i}
      </button>
    );
  }

  return (
    <div className={cx("left")}>
      <div className={cx("countdown")}>
        <p>Thời gian làm bài: </p>
        <span>{formattedTime}</span>
      </div>
      <div className={cx("navigate")}>{buttonElements}</div>
    </div>
  );
}

export default Time;

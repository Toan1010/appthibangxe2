import React, { useState, useEffect } from "react";
import style from "./Timer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Timer() {
  const [timeLeft, setTimeLeft] = useState(150);

  useEffect(() => {
    let interval;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      // onTimeup(initialTime);
      console.log('done');
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  // Format the time to "00:00"
  const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(
    2,
    "0"
  )}:${String(timeLeft % 60).padStart(2, "0")}`;

  return (
    <div className={cx("time")}>
      <p>{formattedTime}</p>
    </div>
  );
}

export default Timer;

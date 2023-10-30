import { useState } from "react";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header({ start, change }) {
  console.log("Header");
  const [option, setOption] = useState(0);
  console.log(option);
  const optionChange = (e) => {
    setOption(parseInt(e.target.value));
  };

  const clickBtn = () => {
    start(option,false);
  };

  return (
    <div className={cx("header")}>
      <h1>QUIZZ TEST BẰNG LÁI XE A1</h1>

      <div className={cx("select")}>
        <select id="mode" onChange={optionChange}>
          <option value="0">-- Chọn thời gian --</option>
          <option value="3">3 mins</option>
          <option value="5">5 mins</option>
          <option value="7">7 mins</option>
        </select>
      </div>

      <button className={cx("state")} onClick={clickBtn}>
        {change}
      </button>
    </div>
  );
}
export default Header;

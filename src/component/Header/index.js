import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

function Header({ start, change }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const clickBtn = () => {
    start(parseInt(selectedOption));
  };

  return (
    <div className={cx("header")}>
      <h1>App thi bang lai xe A1</h1>

      <div className={cx("select")}>
        <select id="mode" onChange={handleSelectChange}>
          <option value="0">Select Mode</option>
          <option value="5">Easy</option>
          <option value="10">Medium</option>
          <option value="15">Hard</option>
        </select>
      </div>

      <button className={cx(`${change}`)} onClick={clickBtn}>
        {change}
      </button>
    </div>
  );
}

export default Header;

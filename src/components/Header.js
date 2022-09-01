import moment from "moment";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="heading">Work Day Scheduler</header>
      <p className="now">{moment().format("dddd, MMMM, Do")}</p>
    </div>
  );
};

export default Header;

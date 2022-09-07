import { Heading, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";

const Header = () => {
  return (
    <div>
      <Heading className="heading">Work Day Scheduler</Heading>
      <Text className="now">{moment().format("dddd, MMMM, Do")}</Text>
    </div>
  );
};

export default Header;

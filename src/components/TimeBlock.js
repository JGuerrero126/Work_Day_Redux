import { Box, Button, Textarea, Text } from "@chakra-ui/react";
import React, { Component, useEffect } from "react";
import moment from "moment";

const TimeBlock = ({ time, index }) => {
  const timeCheck = (el) => {
    var Current = parseInt(moment().format("HH"));
    const timeToCheck = parseInt(el.attributes[0].value);
    console.log(Current);
    console.log(timeToCheck);

    if (timeToCheck < Current) {
      el.classList.add("past");
    } else if (timeToCheck === Current) {
      el.classList.add("present");
    } else if (timeToCheck > Current) {
      el.classList.add("future");
    }
  };

  useEffect(() => {
    const currentEl = document.getElementById(index);
    timeCheck(currentEl);
    setInterval(() => {
      timeCheck(currentEl);
    }, 60000);
  }, []);

  return (
    <div className="timeBlock">
      <Box className="timeArea">
        <Text currenttime={time}>{time}</Text>
      </Box>
      <Textarea
        id={index}
        onChange={(e) => timeCheck(e.target)}
        data-index={index}
        className="timeText"
      />
      <Button className="timeButton">TEST</Button>
    </div>
  );
};

export default TimeBlock;

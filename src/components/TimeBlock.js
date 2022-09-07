import { Box, Text, SimpleGrid, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { timeCheck } from "../timeCheck";

const TimeBlock = ({ time, index }) => {
  const handleChange = (event) => {
    const { value } = event.target;

    setValue(value);

    localStorage.setItem(index, value);
  };

  const getSavedInfo = () => {
    const info = localStorage.getItem(index);
    setValue(info);
  };

  const [value, setValue] = useState("");

  useEffect(() => {
    const currentEl = document.getElementById(index);
    timeCheck(currentEl);
    setInterval(() => {
      timeCheck(currentEl);
    }, 60000);
  }, [index]);

  useEffect(() => {
    getSavedInfo();
  }, []);

  return (
    <SimpleGrid className="timeBlock">
      <Box className="timeArea">
        <Text currenttime={time}>{time}</Text>
      </Box>
      <Input
        id={index}
        className="timeText"
        onChange={handleChange}
        value={value}
      />
    </SimpleGrid>
  );
};

export default TimeBlock;

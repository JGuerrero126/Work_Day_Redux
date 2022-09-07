import moment from "moment";

export const timeCheck = (el) => {
  var Current = parseInt(moment().format("HH"));
  const timeToCheck = parseInt(el.id);
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

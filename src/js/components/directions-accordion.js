import Accordion from "accordion-js";

const accordion = new Accordion(".directions__accordion", {
  multiple: false,
  collapse: false,
});

accordion.open(0);

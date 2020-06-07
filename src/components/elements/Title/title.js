import React from "react";
import { string } from "prop-types";
import Circle from "../Circle";
import Flex from "../Flex";
import { TextTitle } from "./title.styles";
import { card } from "../../../temp/index";

const Title = ({ title }) => (
  <Flex p={2} justifyContent="center" alignItems="center">
    <Circle size="50" color="white">
      <img alt="card" src={card} />
    </Circle>
    <TextTitle as={"h1"}>
      {title[0]} <br />
      {title[1]}
    </TextTitle>
  </Flex>
);

Title.propTypes = {
  title: string.isRequired,
};

Title.displayName = "Title";


export default Title;

import React from "react";
import { arrayOf, bool, shape, string } from "prop-types";
import Flex from "../Flex";
import Circle from "../Circle";
import { ArrowRight, TextBread } from "./breadcrumb.styles";
import { arrowBottom, check } from "../../../assets/index";

const Breadcrumb = ({ data }) => (
  <Flex>
    {data.map((option, index) => (
      <Flex key={option.value} justifyContent="center" alignItems="center">
        {option.state && (
          <Circle size="22" color="red" checked>
            <img src={check} alt={option.value} />
          </Circle>
        )}
        {!option.state && (
          <Circle  size="22" color="red">
            <TextBread>{option.value}</TextBread>
          </Circle>
        )}
        <TextBread mr={2} ml={2}>{option.text}</TextBread>
        {index < data.length - 1 && <ArrowRight src={arrowBottom} />}
      </Flex>
    ))}
  </Flex>
);

Breadcrumb.propTypes = {
  data: arrayOf(
    shape({
      value: string,
      text: string,
      state: bool,
    })
  ),
};

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;

import React from "react";
import { array, bool, func, string } from "prop-types";
import Flex from "../Flex";
import { visa } from "../../../temp/index";
import { Container, Img, TextCard, TextNumber } from "./card.styles";

const Card = ({ date, position, onClickCard, name, number, ...props }) => (
  <>
    {position && (
      <Container front onClick={onClickCard} {...props}>
        {props.check && (
          <Flex>
            <Img src={visa} alt="Logotipo da Visa" />
          </Flex>
        )}
        <Flex justifyContent={"space-around"} width={"100%"}>
          {number.map((e, i) => (
            <TextNumber key={i}>{e}</TextNumber>
          ))}
        </Flex>
        <Flex justifyContent={"space-around"} width={"100%"} pb={2}>
          <TextCard>{name}</TextCard>
          <TextCard>{date}</TextCard>
        </Flex>
      </Container>
    )}
    {!position && <Container onClick={onClickCard} {...props}></Container>}
  </>
);

Card.propTypes = {
  date: string.isRequired,
  name: string.isRequired,
  number: array.isRequired,
  onClickCard: func.isRequired,
  position: bool.isRequired,
};

Card.displayName = "Card";

export default Card;

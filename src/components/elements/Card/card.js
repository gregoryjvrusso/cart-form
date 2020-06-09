import React from "react";
import { array, bool, func, string } from "prop-types";
import Flex from "../Flex";
import { visa } from "../../../assets/index";
import { Container, Img, TextCard, TextNumber } from "./card.styles";

const Card = ({
  date,
  position,
  setPosition,
  onClickCard,
  name,
  number,
  ...props
}) => (
  <>
    {position && (
      <Container
        data-testid="card-front"
        front
        onClick={() => onClickCard(setPosition, position)}
        {...props}
      >
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
          <TextCard>{name.toUpperCase().substr(0, 20)}</TextCard>
          <TextCard>{date}</TextCard>
        </Flex>
      </Container>
    )}
    {!position && (
      <Container
        data-testid="card-back"
        onClick={() => onClickCard(setPosition, position)}
        {...props}
      ></Container>
    )}
  </>
);

Card.propTypes = {
  date: string,
  name: string,
  number: array.isRequired,
  onClickCard: func.isRequired,
  setPosition: func,
  position: bool.isRequired,
};

Card.defaultProps = {
  name: "NOME DO TITULAR",
  date: "00/00",
  setPosition: undefined,
};

Card.displayName = "Card";

export default Card;

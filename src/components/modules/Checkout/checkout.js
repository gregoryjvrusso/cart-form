import React, { useState } from "react";
import ComeBack from "../../elements/ComeBack";
import Title from "../../elements/Title";
import Card from "../../elements/Card";
import Flex from "../../elements/Flex";
import Breadcrumb from "../../elements/Breadcrumb";
import Form from "../Form";
import {
  cardOnClick,
  checkValue,
  numberFormat,
} from "../../../utils/cardEvent";

import {
  breadcrumbData,
  inputSelectData,
  titleData,
} from "../../../assets/mock-data";

const Checkout = () => {
  const [card, setCard] = useState("");
  const [name, setName] = useState(undefined);
  const [date, setDate] = useState(undefined);
  const [cvv, setCvv] = useState("");
  const [subdivision, setSubdivision] = useState("");
  const [position, setPosition] = useState(true);

  return (
    <Flex flexDirection={["column", "column", "row"]} height="100%">
      <Flex
        flexDirection="column"
        bg="red"
        maxWidth={["100%", "100%", "45%"]}
        minHeight={["210px", "210px", "100%"]}
      >
        <ComeBack />
        <Title title={titleData} />
        <Flex
          position="relative"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Flex position="absolute" left={["", "", "45px"]} top={"0"}>
            <Card
              number={numberFormat(card)}
              name={name}
              date={date}
              position={position}
              setPosition={setPosition}
              onClickCard={cardOnClick}
              check={checkValue(name, card, date)}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        mt={["90px", "90px", "0"]}
        ml={["0", "0", "90px"]}
      >
        <Flex display={["none", "none", "flex"]} mb={3}>
          <Breadcrumb data={breadcrumbData} />
        </Flex>
        <Form
          dataSelect={inputSelectData}
          setCard={setCard}
          card={card}
          setName={setName}
          name={name}
          setDate={setDate}
          date={date}
          setCvv={setCvv}
          cvv={cvv}
          setSubdivision={setSubdivision}
          subdivision={subdivision}
        />
      </Flex>
    </Flex>
  );
};

export default Checkout;

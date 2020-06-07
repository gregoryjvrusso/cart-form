import React from "react";
import Flex from "../Flex";
import { ArrowLeft, TextComeBack } from "./comeBack.styles";
import { arrowWhite } from "../../../temp/index";
import Box from "../Box";

const ComeBack = () => (
  <Flex
    width="100%"
    justifyContent={["flex-start", "flex-start", "center"]}
    alignItems="center"
  >
    <ArrowLeft alt="botão voltar" src={arrowWhite} />
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      display={["flex", "flex", "none"]}
    >
      <TextComeBack>
        <span>Etapa 2</span> de 3
      </TextComeBack>
    </Flex>
    <Box display={["none", "none", "block"]}>
      <TextComeBack>Alterar forma de pagamento</TextComeBack>
    </Box>
  </Flex>
);

export default ComeBack;

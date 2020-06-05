import styled, { css } from "styled-components";
import Flex from "../Flex";
import Text from "../Text";
import {
  backCardCheck,
  backCardDefault,
  frontCardCheck,
  frontCardDefault,
} from "../../../temp/index";
import { theme } from "styled-tools";

export const Container = styled(Flex)`
  align-content: flex-end;
  color: ${theme("colors.texts.white")};
  flex-direction: column;
  flex-wrap: wrap;
  height: 172px;
  justify-content: flex-end;
  text-shadow: 0px 1px 2px #000000b3;
  transition: 0.6s;
  width: 280px;

  ${(props) =>
    props.front &&
    css`
      background: transparent
        ${(props) =>
          props.check ? `url(${frontCardCheck})` : `url(${frontCardDefault})`}
        0% 0% no-repeat padding-box;
    `}
  ${(props) =>
    !props.front &&
    css`
      background: transparent
        ${(props) =>
          props.check ? `url(${backCardCheck})` : `url(${backCardDefault})`}
        0% 0% no-repeat padding-box;
    `}
`;

export const TextNumber = styled(Text)`
  font-size: ${theme("fontSizes.3")}px;
  letter-spacing: 3px;
`;

export const TextCard = styled(Text)`
  color: ${theme("colors.texts.white")};
  font-size: ${theme("fontSizes.1")}px;
  letter-spacing: 3px;
  text-shadow: 0px 1px 2px #000000b3;
`;

export const Img = styled.img`
  padding: ${theme("spaces.3")}px;
`;

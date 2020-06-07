import styled from "styled-components";
import { flexbox, layout } from "styled-system";

import Box from "../Box";

export const Container = styled(Box)`
  ${{ display: "flex" }}
  ${flexbox}
  ${layout}
`;

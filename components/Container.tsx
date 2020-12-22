import styled from "styled-components";
import { Box } from "@chakra-ui/react";

export const InnerContainer = styled(Box)`
  width: 70%;
  height: 70%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
  padding: 5%;
`;

export const MainContainer = styled(Box)`
  height: 100vh;
`;

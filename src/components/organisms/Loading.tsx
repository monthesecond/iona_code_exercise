import React from "react";
import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import Spinner from "react-bootstrap/Spinner";

interface Props {
  loadingText: string;
}

export const Loading: React.FC<Props> = ({ loadingText }) => {
  return (
    <StyledContainer>
      <Spinner animation="grow" role="status" variant="primary" />
      <Spinner animation="grow" role="status" variant="info" />
      <Spinner animation="grow" role="status" variant="primary" />
      <StyledText>{loadingText}</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.span`
  font-size: ${pxToRem(28)};
  margin-left: ${pxToRem(15)};
  color: #0b5ed7;
`;

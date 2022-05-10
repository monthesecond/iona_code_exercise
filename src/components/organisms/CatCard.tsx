import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

interface CatCardProps {
  imageSource: string;
  name: string;
  id: string;
}

export const CatCard: React.FC<CatCardProps> = ({ imageSource, name, id }) => {
  return (
    <StyledContainer>
      <StyledImage src={imageSource} alt={name} />
      <Link to={`/details/${id}`}>
        <StyledButton variant="primary">View Details</StyledButton>
      </Link>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: ${pxToRem(480)};
  max-width: ${pxToRem(420)};
  margin: ${pxToRem(24)};
  border: ${pxToRem(0.5)} solid #a9a9a9;
  border-radius: ${pxToRem(15)};
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  margin-bottom: ${pxToRem(15)};
  border-top-left-radius: ${pxToRem(15)};
  border-top-right-radius: ${pxToRem(15)};
  border-bottom: ${pxToRem(1)} solid gray;
`;

const StyledButton = styled(Button)`
  margin-bottom: ${pxToRem(15)};
`;

export default CatCard;

import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DataContext from "../../context/DataContext";
import { pxToRem } from "../../utils/pxToRem";
import { useNavigate } from "react-router-dom";

export const Details: React.FC = () => {
  const navigate = useNavigate();
  const { catDetails }: any = useContext(DataContext);
  const imageSrc = catDetails[0]?.image.url;
  const name = catDetails[0]?.name;
  const origin = catDetails[0]?.origin;
  const temperament = catDetails[0]?.temperament;
  const description = catDetails[0]?.description;

  // Protection for accessing the Detail Page with no Breed selected yet
  useEffect(() => {
    if (!catDetails.length) {
      navigate("/");
    }
  }, [catDetails, navigate]);

  return (
    <StyledContainer>
      <Link to="/">
        <StyledButton variant="primary">Back</StyledButton>
      </Link>
      <StyledTextContainer>
        <StyledImage src={imageSrc} alt={name} />
        <StyledName>{name}</StyledName>
        <StyledOrigin>Origin: {origin}</StyledOrigin>
        <StyledTemperament>{temperament}</StyledTemperament>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  max-width: ${pxToRem(640)};
  margin: ${pxToRem(20)} auto;
  border: ${pxToRem(0.5)} solid #a9a9a9;
  background-color: #f7f7f7;
`;

const StyledButton = styled(Button)`
  margin: ${pxToRem(12)};
`;

const StyledImage = styled.img`
  max-height: 540px;
  width: 100%;
  object-fit: contain;
  margin-bottom: ${pxToRem(15)};
  border-radius: ${pxToRem(15)};
`;

const StyledTextContainer = styled.div`
  padding: ${pxToRem(20)};
  text-align: center;
`;

const StyledName = styled.p`
  font-size: ${pxToRem(22)};
  font-weight: 700;
`;

const StyledOrigin = styled.p`
  font-size: ${pxToRem(18)};
  font-weight: 600;
`;

const StyledTemperament = styled.p`
  font-size: ${pxToRem(16)};
  font-weight: 500;
  font-style: italic;
`;

const StyledDescription = styled.p`
  font-size: ${pxToRem(14)};
  font-weight: 400;
`;

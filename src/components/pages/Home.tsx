import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { pxToRem } from "../../utils/pxToRem";
import DataContext from "../../context/DataContext";
import { Loading } from "../organisms/Loading";
import CatCard from "../organisms/CatCard";

export const Home: React.FC = () => {
  const { breeds, catDetails, getCatDetails }: any = useContext(DataContext);
  const [selectedBreed, setSelectedBreed] = useState("");

  const handleSelect = (e) => {
    setSelectedBreed(e);
    getCatDetails(e);
  };

  return (
    <StyledMainContainer>
      {breeds?.length === 0 ? (
        <Loading loadingText="Fetching Data from Cat API...🐱🐱🐱" />
      ) : (
        <>
          <StyledHeader>CAT BROWSER</StyledHeader>
          <StyledLabel>Breed</StyledLabel>
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedBreed || "Select a Breed"}
            variant="primary"
            onSelect={handleSelect}
          >
            {breeds?.map((breed) => (
              <Dropdown.Item eventKey={breed.name} key={breed.id}>
                {breed.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          {catDetails.length > 0 && (
            <CatCard
              imageSource={catDetails[0]?.image?.url}
              name={selectedBreed}
              id={catDetails[0]?.id}
            />
          )}
        </>
      )}
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  max-height: ${pxToRem(640)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${pxToRem(768)};
  margin: 0 auto;
  padding: ${pxToRem(20)};
  border: ${pxToRem(0.5)} solid #a9a9a9;
  background-color: #f7f7f7;
  border-radius: ${pxToRem(25)};
`;

const StyledHeader = styled.h1`
  font-size: ${pxToRem(28)};
  margin-top: ${pxToRem(16)};
`;

const StyledLabel = styled.p`
  font-size: ${pxToRem(18)};
`;

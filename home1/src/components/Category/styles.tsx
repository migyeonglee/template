import styled from "styled-components";

export const CategoryBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  width: 70%;
`;
export const BackImage = styled.button`
  background-color: var(--category-background);
  width: 8em;
  aspect-ratio: 1/0.8;
  position: relative;
  isolation: isolate;
  cursor: pointer;
  border-radius: 5px;
  color: var(--white-font);
  font-size: var(--size-content);
  font-weight: 600;
`;

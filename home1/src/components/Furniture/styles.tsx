import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin-top: 5em;
`;
export const Title = styled.p`
  text-align: center;
  color: var(--main-font);
  font-size: 3rem;
`;

export const FurnitureBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2em;
  margin-top: 2rem;
  padding: 0;
  list-style: none;

  @media (max-width: 1200px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    gap: 1em;
  }
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(33.333% - 2em);
  text-align: center;
  gap: 20px;

  @media (max-width: 1200px) {
    width: calc(50% - 1em);
  }

  @media (max-width: 768px) {
    width: calc(50% - 1em);
  }
`;

export const Poto = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
`;

export const Name = styled.p`
  font-size: var(--size-title);
  font-weight: 600;
`;
export const Price = styled.p`
  font-size: var(--size-content);
  font-weight: 500;
`;

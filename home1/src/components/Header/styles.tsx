import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 15px;
  background: var(--main-background);
`;
export const MainLogo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MenuBox = styled.div`
  display: flex;
  gap: 2rem;
`;
export const Menu = styled.button`
  color: var(--main-font);
  font-size: var(--size-content);
  font-weight: var(--weight-title);
`;
export const IconBox = styled.div`
  display: flex;
  color: var(--main-font);
  gap: 10px;
  font-size: var(--size-title);
  padding-right: 30px;
`;

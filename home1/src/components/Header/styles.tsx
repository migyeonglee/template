import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding:  10px 15px;
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
color: var( --main-font);
font-size: var(--size-content);
font-weight:var(--weight-title) ;
`;
export const IconBox = styled.div`
display: flex;
color: var( --main-font);
gap: 10px;
font-size: var(--size-title);
padding-right: 20px;
`;

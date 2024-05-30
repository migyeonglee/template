import styled from "styled-components";

export const BannerBox = styled.div`
  background-image: url("/images/main_banner.jpg");
  background-size: cover;
  background-size: center;
  width: 100%;
  min-height: 100vh;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    background: var(--main-background);
    z-index: -1;
    inset: 0;
    opacity: 0.4;
  }
`;

export const Title = styled.p`
  margin: 50px 0 0 30px;
  color: var(--main-font);
  font-weight: 900;
  font-size: 5em;
`;

export const SubTitle = styled.p`
  margin: 20px 30px;
  color: var(--color-brown0);
  font-weight: 800;
  font-size: var(--size-title);
`;

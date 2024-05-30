import { BannerBox, SubTitle, Title } from "./styles";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function MainBanner() {
  return (
    <BannerBox>
      <Title>NATURE FRIENDLY FURNITURE</Title>
      <SubTitle>
        지속 가능한 소재와 친환경 공정을 통해 자연과 조화를 이루는 가구를
        만나보세요.
      </SubTitle>
    </BannerBox>
  );
}

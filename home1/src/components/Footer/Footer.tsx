import { CompanyInfo, Container, ContentInfo, Copyright } from "./styles";

import React from "react";

export default function Footer() {
  return (
    <Container>
      <ContentInfo>
        <Copyright>Copyright 2024. celebstars. ALL RIGHTS RESERVED.</Copyright>
      </ContentInfo>
      <hr />
      <CompanyInfo>
        <Copyright>Copyright 2024. celebstars. ALL RIGHTS RESERVED.</Copyright>
      </CompanyInfo>
    </Container>
  );
}

import { Container, IconBox, MainLogo, Menu, MenuBox, } from "./styles";
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";

import Image from "next/image";
import React from "react";
import { navbarData } from "@components/common/data/navbarData";

export default function Navbar() {

  return (
    <Container>
      <MainLogo>
        <Image src={navbarData?.logo} width={50} height={50} alt="Main Logo" />
      </MainLogo>
      <MenuBox>
        {navbarData.links.map((link, index) => (
          <Menu key={index} onClick={() => (window.location.href = link.url)}>
            {link.title}
          </Menu>
        ))}
      </MenuBox>
      <IconBox>
        {/* <UserOutlined  style={{ cursor:'pointer' }}/>
        <ShoppingOutlined style={{ cursor:'pointer' }}/> */}
      </IconBox>
    </Container>
  );
}

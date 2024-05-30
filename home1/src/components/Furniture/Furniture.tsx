import {
  Container,
  FurnitureBox,
  List,
  Name,
  Poto,
  Price,
  Title,
} from "./styles";

import Image from "next/image";
import React from "react";
import { bestListData } from "@components/common/data/allData";

export default function Furniture() {
  return (
    <Container>
      <Title> FURNITURE</Title>
      <FurnitureBox>
        {bestListData.map((item, index) => (
          <List key={index}>
            <Poto>
              <Image src={item.poto} fill alt="" />
            </Poto>
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
          </List>
        ))}
      </FurnitureBox>
    </Container>
  );
}

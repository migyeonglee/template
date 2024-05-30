import { BackImage, CategoryBox } from "./styles";

import React from "react";
import { category } from "@components/common/data/allData";

export default function Category() {
  return (
    <CategoryBox>
      {category.map((item, index) => (
        <BackImage
          key={index}
          onClick={() => (window.location.href = item.url)}
        >
          {item.title}
        </BackImage>
      ))}
    </CategoryBox>
  );
}

import Category from "@components/Category/Category";
import Class from "@components/Information/Class";
import CustomOrder from "@components/Information/CustomOrder";
import Furniture from "@components/Furniture/Furniture";
import MainBanner from "@components/Banner/MainBanner";
import styled from "styled-components";

export default function indox() {
  return (
    <Container>
      <MainBanner />
      <Category />
      <Furniture />
      <Class />
      <CustomOrder />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

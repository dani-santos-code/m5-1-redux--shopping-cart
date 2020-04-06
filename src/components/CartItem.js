import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const CartItemWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px;
`;
const ItemCard = styled.div`
  color: white;
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(255, 255, 255, 0.1);
  border-image: initial;
  margin: 0px -16px 16px;
`;

const ItemCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 16px;
`;

const ItemCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ItemCardBody = styled.div`
  font-size: 13px;
  color: rgb(204, 204, 204);
  background: rgba(0, 0, 0, 0.25);
  padding: 8px 16px;
`;

const QuantityInput = styled.input`
  border-top-width: initial;
  border-right-width: initial;
  border-left-width: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  width: 30px;
  height: 30px;
  color: white;
  font-size: inherit;
  text-align: center;
  font-weight: bold;
  background: transparent;
  border-style: none none solid;
  border-image: initial;
  border-bottom: 3px solid white;
  padding: 4px;
`;

export default function CartItem({ title, quantity }) {
  return (
    <CartItemWrapper>
      <ItemCard>
        <ItemCardHeader>
          <ItemCardTitle>{title}</ItemCardTitle>
          <CloseButton />
        </ItemCardHeader>
        <ItemCardBody>
          Quantity
          <QuantityInput></QuantityInput>
        </ItemCardBody>
      </ItemCard>
    </CartItemWrapper>
  );
}

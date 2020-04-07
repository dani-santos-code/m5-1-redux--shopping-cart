import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import { getStoreItemArray } from "../reducers";

const CartWrapper = styled.section`
  position: sticky;
  top: 0px;
  min-width: 300px;
  min-height: 100vh;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(64, 31, 67);
  padding-left: 32px;
  padding-right: 32px;
  overflow: auto;
`;

const CartH2 = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0px;
`;

const CartItemCount = styled.p`
  font-size: 16px;
  opacity: 0.75;
  margin: 8px 0px 0px;
`;

const PurchaseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 64px;
  padding-left: 32px;
  padding-right: 32px;
  font-size: 15px;
  padding: 0;
`;
const TotalAmount = styled.div``;

const PurchaseButton = styled.button`
  position: relative;
  display: block;
  width: 120px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 12px;
  background: rgb(255, 64, 110);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 8px;
  &::after {
    content: "Purchase";
  }
`;
export default function Cart() {
  const storeItems = useSelector(getStoreItemArray);
  const totalPrice = useSelector((state) => state.totalPrice);
  return (
    <CartWrapper>
      <div>
        <CartH2>Your Cart</CartH2>
        <CartItemCount>1 items</CartItemCount>
      </div>
      {storeItems.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          quantity={item.quantity}
          id={item.id}
        />
      ))}
      <PurchaseWrapper>
        <TotalAmount>
          Total:
          <strong>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalPrice / 100)}
          </strong>
        </TotalAmount>
        <PurchaseButton></PurchaseButton>
      </PurchaseWrapper>
    </CartWrapper>
  );
}

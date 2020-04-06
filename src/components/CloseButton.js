import React from "react";
import styled from "styled-components";
import { removeItem } from "../actions";
import { useDispatch } from "react-redux";

const Button = styled.button`
  align-self: center;
  color: white;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;
export default function CloseButton({ id }) {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(removeItem(id))}>
      <svg
        fill="none"
        height="16"
        width="16"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: "inline-block", verticalAlign: "middle" }}
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </Button>
  );
}

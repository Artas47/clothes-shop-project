import styled, { css } from "styled-components";

export const CheckoutHeader = styled.div`
  margin: 8rem auto;
  width: 100%;
`;

export const CheckoutHeaderList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
`;
export const CheckoutHeaderListItem = styled.li`
  font-size: 2.5rem;
  ${props =>
    props.a &&
    css`
      grid-row: 1/1;
      grid-column: 1/2;
    `}
    ${props =>
      props.b &&
      css`
        grid-row: 1/1;
        grid-column: 2/3;
      `}
    ${props =>
      props.c &&
      css`
        grid-row: 1/1;
        grid-column: 3/4;
      `}
    ${props =>
      props.d &&
      css`
        grid-row: 1/1;
        grid-column: 4/5;
      `}
    ${props =>
      props.e &&
      css`
        grid-row: 1/1;
        grid-column: 5/6;
      `}
`;

import styled from "styled-components";

export const CheckoutHeader = styled.div`
  margin: 0 auto;
  margin-top: 8rem;
  width: 100%;
`;

export const CheckoutHeaderList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 25rem repeat(4, 1fr);
  justify-items: center;
`;
export const CheckoutHeaderListItem = styled.li`
  font-size: 2.5rem;
`;

import styled from "styled-components";

export const CheckoutHeader = styled.div`
  margin: 0 auto;
  margin-top: 8rem;
  width: 100%;
`;

export const CheckoutHeaderList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 25rem repeat(4, minmax(10rem, 20rem));
  justify-items: center;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: 15rem repeat(4, minmax(5rem, 1fr));
  }
`;
export const CheckoutHeaderListItem = styled.li``;

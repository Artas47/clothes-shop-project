import styled from "styled-components";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";

export const CartIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledShoppingCart = styled(ShoppingCart)`
  width: 4rem;
  height: 4rem;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 2rem;
  top: 1.1rem;
`;

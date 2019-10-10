import styled from "styled-components";

export const MenuItem = styled.div`
  min-width: 30%;
  position: relative;
  height: 25rem;
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: -1;
    transform: scale(1.15);
    transition: all 1s;
    filter: blur(1px);
  }

  :hover:after {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  opacity: 0.8;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 2.2rem;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 1.6rem;
`;

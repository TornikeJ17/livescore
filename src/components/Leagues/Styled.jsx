import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.body};
  display: none;
  @media screen and (min-width: 1px) and (max-width: 1920px) {
    display: block;
  }
`;
export const Title = styled.div`
  font-size: 24px;
  border-bottom: 1px solid #e0e1e2;
  display: none;
  @media screen and (min-width: 1201px) and (max-width: 1920px) {
    display: block;
  }
`;
export const IMG = styled.img`
  width: 20px;
  height: 15px;
  margin-right: 5px;
`;
export const Block = styled.div`
  display: none;
  align-items: center;
  padding: 5px;
  :hover {
    background: #e2e4e4;
    cursor: pointer;
    color: #222;
    border-radius: 5px;
  }
  @media screen and (min-width: 1201px) and (max-width: 1920px) {
    display: flex;
  }
`;
export const LeagueName = styled.div``;

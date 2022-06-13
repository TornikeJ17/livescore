import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.blockColor};
  width: 1200px;
  max-width: 100%;
  height: 200px;
  border-radius: 10px;
  display: flex;
  position: relative;
`;
export const Block = styled.div`
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 10px;
  position: absolute;
  top: 30px;
  left: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const IMG = styled.img`
  width: 100px;
  max-width: 100%;
`;
export const Title = styled.div`
  position: absolute;
  top: 40px;
  left: 200px;
  font-size: 24px;
`;
export const Season = styled.select`
  position: absolute;
  top: 120px;
  left: 200px;
  font-size: 13px;
  color: #c8cdcd;
`;

export const Select = styled.select`
  display: none;
  @media screen and (min-width: 320px) and (max-width: 1410px) {
    display: block;
    width: 150px;
    position: absolute;
    left: 200px;
    top: 90px;
    font-size: 13px;
    color: #c8cdcd;
  }
`;

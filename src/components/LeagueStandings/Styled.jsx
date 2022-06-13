import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  border-radius: 10px;
  margin-top: 1rem;
  background: ${({ theme }) => theme.blockColor};
`;
export const HrElement = styled.hr`
  border: 1px solid #eee;
  width: 1200px;
  max-width: 100%;
`;
export const BlockOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  font-weight: 700;
`;
export const BlockTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;

export const Team = styled.div`
  width: 300px;
  max-width: 100%;
  display: flex;
  align-items: center;
`;
export const LittleBlock = styled.div`
  width: 150px;
  max-width: 100%;
`;
export const PTS = styled.div`
  width: 100px;
  max-width: 100%;
  font-weight: 700;
`;
export const IMG = styled.img`
  width: 25px;
  max-width: 100%;
  margin-right: 5px;
`;

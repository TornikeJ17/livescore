import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  border-radius: 10px;
  margin-top: 1rem;
  background: ${({ theme }) => theme.blockColor};
  overflow-x: auto;
`;
export const HrElement = styled.hr`
  border: 1px solid #eee;
  width: 1200px;
  max-width: 100%;
`;
export const Table = styled.table`
  width: 1200px;
  max-width: 100%;
`;
export const Tbody = styled.tbody`
  width: 1200px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
`;
export const Thead = styled.thead`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 5px;
  font-weight: 700;
  width: 1180px;
  max-width: 100%;
`;
export const ItemBlock = styled.div``;

export const BlockTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  flex-flow: wrap;
  width: 1180px;
  max-width: 100%;
`;

export const Team = styled.th`
  width: 486px;
  max-width: 100%;
  display: flex;
  align-items: center;
`;
export const LittleBlock = styled.th`
  width: 98px;
  max-width: 100%;
`;
export const PTS = styled.th`
  width: 100px;
  max-width: 100%;
  font-weight: 700;
`;
export const IMG = styled.img`
  width: 25px;
  max-width: 100%;
  margin-right: 5px;
`;

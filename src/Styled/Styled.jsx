import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    width: 1410px;
    max-width: 100%;
    margin: 0 auto;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.mainColor};
    font-family: 'Chakra Petch', sans-serif;
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
`;
export const Container = styled.div`
  max-width: 100%;
`;
export const BlockOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
export const BlockTwo = styled.div`
  max-width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: end;
`;
export const LoaderBlock = styled.div`
  width: 1200px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12.5rem;
`;
export const Loader = styled.div`
  border: 10px solid #001e28;
  border-radius: 50%;
  border-top: 10px solid #eee;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @media screen and (min-width: 320px) and (max-width: 725px) {
    left: 120px;
    top: 180px;
  }
`;

import styled, { createGlobalStyle } from 'styled-components';

// create theme object
// try the nesting &
// try the props

export const GloblStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    background-color: #F1FAEE;
  }

`;

export const RightWrapper = styled.div`
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.primaryFontColor};
  h1 {
    font-size: 5rem;
  }
`;

export const Items = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;
  gap: 3rem;
  h1 {
    font-size: 4rem;
    color: #e63946;
  }
  p {
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 15px;
  background: #a8dadc;
  -webkit-box-shadow: 7px 10px 29px -2px rgba(0, 0, 0, 0.62);
  box-shadow: 7px 10px 29px -2px rgba(0, 0, 0, 0.62);
  color: ${props => props.theme.primaryFontColor};
  img {
    width: 100%;
    /* height: 100px; */
    object-fit: cover;
    border-radius: 25px;
  }
`;

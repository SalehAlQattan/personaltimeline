import styled, { createGlobalStyle } from 'styled-components';

// create theme object
// try the nesting &
// try the props

export const GloblStyle = createGlobalStyle`
body {
  font-family: Arial, Helvetica, sans-serif;
}

`;

export const AppWrapper = styled.div`
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  background-color: gray;
`;

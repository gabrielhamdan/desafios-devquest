import AppRoutes from './pages/routes'
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './contexts/theme-context';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Container>
          <AppRoutes />
        </Container>
      </ThemeProvider>
      {console.log("A wild user appears!")}
    </>
  );
}

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'Press Start 2P', cursive;
  }

a {
    text-decoration: none;
    color: black;
}

img {
    image-rendering: crisp-edges;
    image-rendering: pixelated;
}

ul {
  list-style-type: none;
}

h2 {
    text-transform: capitalize;
    font-size: 60%;
}
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export default App;

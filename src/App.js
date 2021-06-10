import { RightWrapper } from './styles';
import TimelineList from './components/TimelineList';
import { GloblStyle } from './styles';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryFontColor: '#1d3557',
  secondaryFontColor: '#fff',
  backgroundColor: '#F1FAEE',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RightWrapper>
        <GloblStyle />
        <h1>Welcome To My Timeline</h1>
        <TimelineList />
      </RightWrapper>
    </ThemeProvider>
  );
}

export default App;

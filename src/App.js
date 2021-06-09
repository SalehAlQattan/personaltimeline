import { AppWrapper } from './styles';
import TimelineList from './components/TimelineList';
import { GloblStyle } from './styles';

function App() {
  return (
    <AppWrapper>
      <GloblStyle />
      <h1>Hello From React App</h1>
      <TimelineList />
    </AppWrapper>
  );
}

export default App;

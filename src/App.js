import './App.css';
import { Container } from '@chakra-ui/react';
import PostContainer from './components/PostContainer';
function App() {
  return (
    <Container maxW='container.sm' p={10}>
      <PostContainer />
    </Container>
  );
}

export default App;

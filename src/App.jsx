import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Hello World</Heading>
        <Button>Check in</Button>
        <Heading as="h2">Form</Heading>
        <Input type="number" placeholder="Number of Guest"></Input>
        <Heading as="h3">Wild oasis</Heading>
      </StyledApp>
    </>
  );
}

export default App;

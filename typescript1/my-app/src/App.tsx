import './App.css';
import { Button } from './components/Button';
import { Counter } from './components/class/Counter';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Naruto',
    last: 'Uzumaki',
  };

  const nameList = [
    {
      first: 'Naruto',
      last: 'Uzumaki',
    },
    {
      first: 'Ichigo',
      last: 'Kurosaki',
    },
    {
      first: 'Anya',
      last: 'Forger',
    },
  ];

  return (
    <div className="App">
      <Container
        styles={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}>
        <Greet name="Henry" messageCount={5} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="loading" />
        <Heading>Placeholder</Heading>
        <Oscar>
          <Heading>Oscar goes to Brendan Fraser!</Heading>
        </Oscar>
        <Greet name="Henry" isLoggedIn={false} />
        <Button
          handleClick={(event, id) => console.log("I'm Clicked!", event, id)}
        />
        <Input
          placeholder="placeholder"
          handleChange={(event) => console.log(event.target.value)}
        />
      </Container>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter message={'the count value is'} />
    </div>
  );
}

export default App;

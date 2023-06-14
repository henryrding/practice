import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
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
    </div>
  );
}

export default App;
